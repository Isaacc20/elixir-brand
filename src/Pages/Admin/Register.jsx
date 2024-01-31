import React, { useEffect, useState } from "react";
import "../../Styles/Admin.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useFormik } from "formik";
import * as yup from "yup"

const Register = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  // const [save, setsave] = useState(false)

  const auth = getAuth();
  // const firebaseConfig = {
  //   //...
  // };
  
  // const app = initializeApp(firebaseConfig);
  // app()

  // useEffect(() => {
  //   if (save) {
    const formik = useFormik({
      initialValues: {
        name : '',
        email: '',
        number: '',
        password : ''
      },
      validationSchema: yup.object({
        name: yup.string().min(2, 'Name is too short').max(70, "Name is too long").required('Required'),
        email: yup.string().email('Invalid email').required('Required'),
        number: yup.number().required('Required'),
        password: yup.string().min(6, 'Password must not be less than six digits').required('Required')
      }),
      onSubmit: (values) => {
        save(values)
      }
    })
    console.log(formik.errors);
    const save = (values)=>{
      try {
        // console.log(values);
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // alert("Successful")
          updateProfile(user, {
            displayName: values.name,
            phoneNumber: values.number
          }).then(() => {
            // Update successful
            // ...
            toast.success(values.name+" saved")
          }).catch((error) => {
            // An error occurred
            // ...
            toast.error('Error updating profile name, ' + error.code)
          });
          toast.success("Successful registration")
          setTimeout(() => {
            navigate('/admin/dashboard')
          }, 5000);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Registration error: " + error)
          toast.error(error.code)
          // ..
        });
      } catch (err) {
        console.log(err);
        toast.err("Registration failed")
      }
    }
  // }, [save])
  
  const back = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="register">
        <ToastContainer />
        <div className="div w-100 h-100 d-flex align-items-center justify-content-center">
          <div className="container d-flex flex-column align-items-center justify-content-center">
            <small className="w-50 text-white">
              NOTE: This page is only for admins of this website <br />
              Kindly <Link onClick={back}>Go back</Link> if you missed your way
            </small>
            <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-3 p-5 form-control shadow w-50 bg-white">
              <h5>Register Admin</h5>
              <label htmlFor="name">
                Full name
                <input type="name" id="name" name="name" className={formik.errors.name? "is-invalid form-control": "form-control"} onChange={formik.handleChange} />
              </label>
              <label htmlFor="email">
                Email
                <input type="email" id="email" name="email" className={formik.errors.email? "is-invalid form-control": "form-control"} onChange={formik.handleChange} />
              </label>
              <label htmlFor="number">
                Phone number
                <input type="number" id="number" name="number" className={formik.errors.number? "is-invalid form-control": "form-control"} onChange={formik.handleChange} />
              </label>
              <label htmlFor="password">
                Password
                <input type="password" id="password" name="password" className={formik.errors.password? "is-invalid form-control": "form-control"} onChange={formik.handleChange} />
              </label>
              <button className="text-decoration-none text-center form-control" type="submit">Continue</button>
              <small>Already an admin? <Link to={'/admin/login'}>Login</Link></small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
