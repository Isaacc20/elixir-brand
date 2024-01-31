import React, { useEffect, useState } from "react";
import "../../Styles/Admin.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    // const [email, setemail] = useState("")
  const navigate = useNavigate();  
  const auth = getAuth()

  const back = () => {
    navigate(-1);
  };

  const formik = useFormik({
    initialValues: {
      // name : '',
      email: '',
      password : ''
    },
    validationSchema: yup.object({
      // name: yup.string().min(2, 'Name is too short').max(70, "Name is too long").required('Required'),
      email: yup.string().email('Invalid email').required('Required'),
      password: yup.string().min(6, 'Password must not be less than six digits').required('Required')
    }),
    onSubmit: (values) => {
      save(values)
    }
  })
  console.log(formik.errors);

  const save = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      toast.success("Successful")
      navigate("/admin/dashboard")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // toast.error(errorCode)
      if (errorCode == "auth/invalid-credential") {
        toast.error("Wrong details")
      }
    });
  }


  return (
    <>
      <div className="login">
        <ToastContainer />
        <div className="div w-100 h-100 d-flex align-items-center justify-content-center">
          <div className="container d-flex flex-column align-items-center justify-content-center">
            <small className="w-50 text-white">
              NOTE: This page is only for admins of this website <br />
              Kindly <Link onClick={back}>Go back</Link> if you missed your way
            </small>
            <form action="" onSubmit={formik.handleSubmit}
              className="d-flex flex-column gap-3 p-5 form-control shadow w-50 bg-white">
              <h5>Admin Login</h5>
              <label htmlFor="email">
                Your email
                <input type="email" name="email" id="email" className={formik.errors.email? "is-invalid form-control" : "form-control"} onChange={formik.handleChange} />
                {formik.errors.email && <small className="text-danger fst-italic">{formik.errors.email}</small>}
              </label>
              <label htmlFor="id">Your password
                <input type="password" name="password" id="password" className={formik.errors.password? "is-invalid form-control" : "form-control"} onChange={formik.handleChange} />
                {formik.errors.password && <small className="text-danger fst-italic">{formik.errors.password}</small>}
              </label>
              <button type="submit" className="text-decoration-none text-center form-control">Continue</button>
              <small>Not an admin? <Link to={'/admin/registernewadmin'}> Register</Link></small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
