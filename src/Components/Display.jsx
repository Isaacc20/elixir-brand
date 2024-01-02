import React from "react";
import axios from "axios";
import "../Styles/Shop.css";
import { useEffect } from "react";
import { FaSave, FaStar, FaEllipsisV, FaCartPlus } from "react-icons/fa";
import { GiSaveArrow } from "react-icons/gi";
import { Link } from "react-router-dom";

const Display = () => {
  return (
    <>
      <div className="display container p-4">
        <div className="dd w-100 d-flex flex-column align-items-center justify-content-evenly">
          <h4 className="text-start w-100 py-3 px-5">All items</h4>
          <div className="card-div d-flex flex-wrap justify-content-evenly gap-5">
            <Link to="/view" className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 rounded-1"></div>
              <span className="px-2 fw-bold w-100 text-start">The power of God</span>
              <span className="px-2 w-100 text-start">Kenneth Hagin</span>
              <div className="d-flex align-items-end justify-content-between w-100 p-1">
                <small className="px-2 w-100 text-start">$ 3.4</small>
                <button className="btn download text-white">
                  <FaCartPlus />
                </button>
              </div>
            </Link>
            <Link to="/view" className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 rounded-1"></div>
              <span className="px-2 fw-bold w-100 text-start">The power of God</span>
              <span className="px-2 w-100 text-start">Kenneth Hagin</span>
              <div className="d-flex align-items-end justify-content-between w-100 p-1">
                <small className="px-2 w-100 text-start">$ 3.4</small>
                <button className="btn download text-white">
                  <FaCartPlus />
                </button>
              </div>
            </Link>
            <Link to="/view" className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 rounded-1"></div>
              <span className="px-2 fw-bold w-100 text-start">The power of God</span>
              <span className="px-2 w-100 text-start">Kenneth Hagin</span>
              <div className="d-flex align-items-end justify-content-between w-100 p-1">
                <small className="px-2 w-100 text-start">$ 3.4</small>
                <button className="btn download text-white">
                  <FaCartPlus />
                </button>
              </div>
            </Link>
            <Link to="/view" className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 rounded-1"></div>
              <span className="px-2 fw-bold w-100 text-start">The power of God</span>
              <span className="px-2 w-100 text-start">Kenneth Hagin</span>
              <div className="d-flex align-items-end justify-content-between w-100 p-1">
                <small className="px-2 w-100 text-start">$ 3.4</small>
                <button className="btn download text-white">
                  <FaCartPlus />
                </button>
              </div>
            </Link>
            <Link to="/view" className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 rounded-1"></div>
              <span className="px-2 fw-bold w-100 text-start">The power of God</span>
              <span className="px-2 w-100 text-start">Kenneth Hagin</span>
              <div className="d-flex align-items-end justify-content-between w-100 p-1">
                <small className="px-2 w-100 text-start">$ 3.4</small>
                <button className="btn download text-white">
                  <FaCartPlus />
                </button>
              </div>
            </Link>
            <Link to="/view" className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 rounded-1"></div>
              <span className="px-2 fw-bold w-100 text-start">The power of God</span>
              <span className="px-2 w-100 text-start">Kenneth Hagin</span>
              <div className="d-flex align-items-end justify-content-between w-100 p-1">
                <small className="px-2 w-100 text-start">$ 3.4</small>
                <button className="btn download text-white">
                  <FaCartPlus />
                </button>
              </div>
            </Link>
            <Link to="/view" className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 rounded-1"></div>
              <span className="px-2 fw-bold w-100 text-start">The power of God</span>
              <span className="px-2 w-100 text-start">Kenneth Hagin</span>
              <div className="d-flex align-items-end justify-content-between w-100 p-1">
                <small className="px-2 w-100 text-start">$ 3.4</small>
                <button className="btn download text-white">
                  <FaCartPlus />
                </button>
              </div>
            </Link>
            <Link to="/view" className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 rounded-1"></div>
              <span className="px-2 fw-bold w-100 text-start">The power of God</span>
              <span className="px-2 w-100 text-start">Kenneth Hagin</span>
              <div className="d-flex align-items-end justify-content-between w-100 p-1">
                <small className="px-2 w-100 text-start">$ 3.4</small>
                <button className="btn download text-white">
                  <FaCartPlus />
                </button>
              </div>
            </Link>
            <Link to="/view" className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 rounded-1"></div>
              <span className="px-2 fw-bold w-100 text-start">The power of God</span>
              <span className="px-2 w-100 text-start">Kenneth Hagin</span>
              <div className="d-flex align-items-end justify-content-between w-100 p-1">
                <small className="px-2 w-100 text-start">$ 3.4</small>
                <button className="btn download text-white">
                  <FaCartPlus />
                </button>
              </div>
            </Link>
            
            {/* <Link className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 shadow rounded-1">
                <button className="save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-1">
                   to="/view"<FaEllipsisV />
                </button>
              </div>
              <span className="px-2 fw-bold">The power of God</span>
              <span className="px-2">Kenneth Hagin</span>
              <small className="px-2">$ 3.4</small>
              <button className="btn download text-white">
                <FaCartPlus />
              </button>
            </Link>
            <Link className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 shadow rounded-1">
                <button className="save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-1">
                   to="/view"<FaEllipsisV />
                </button>
              </div>
              <span className="px-2 fw-bold">The power of God</span>
              <span className="px-2">Kenneth Hagin</span>
              <small className="px-2">$ 3.4</small>
              <button className="btn download text-white">
                <FaCartPlus />
              </button>
            </Link>
            <Link className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 shadow rounded-1">
                <button className="save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-1">
                   to="/view"<FaEllipsisV />
                </button>
              </div>
              <span className="px-2 fw-bold">The power of God</span>
              <span className="px-2">Kenneth Hagin</span>
              <small className="px-2">$ 3.4</small>
              <button className="btn download text-white">
                <FaCartPlus />
              </button>
            </Link>
            <Link className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 shadow rounded-1">
                <button className="save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-1">
                   to="/view"<FaEllipsisV />
                </button>
              </div>
              <span className="px-2 fw-bold">The power of God</span>
              <span className="px-2">Kenneth Hagin</span>
              <small className="px-2">$ 3.4</small>
              <button className="btn download text-white">
                <FaCartPlus />
              </button>
            </Link>
            <Link className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 shadow rounded-1">
                <button className="save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-1">
                   to="/view"<FaEllipsisV />
                </button>
              </div>
              <span className="px-2 fw-bold">The power of God</span>
              <span className="px-2">Kenneth Hagin</span>
              <small className="px-2">$ 3.4</small>
              <button className="btn download text-white">
                <FaCartPlus />
              </button>
            </Link>
            <Link className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 shadow rounded-1">
                <button className="save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-1">
                   to="/view"<FaEllipsisV />
                </button>
              </div>
              <span className="px-2 fw-bold">The power of God</span>
              <span className="px-2">Kenneth Hagin</span>
              <small className="px-2">$ 3.4</small>
              <button className="btn download text-white">
                <FaCartPlus />
              </button>
            </Link>
            <Link className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 shadow rounded-1">
                <button className="save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-1">
                   to="/view"<FaEllipsisV />
                </button>
              </div>
              <span className="px-2 fw-bold">The power of God</span>
              <span className="px-2">Kenneth Hagin</span>
              <small className="px-2">$ 3.4</small>
              <button className="btn download text-white">
                <FaCartPlus />
              </button>
            </Link>
            <Link className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
              <div className="img position-relative h-100 shadow rounded-1">
                <button className="save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-1">
                   to="/view"<FaEllipsisV />
                </button>
              </div>
              <span className="px-2 fw-bold">The power of God</span>
              <span className="px-2">Kenneth Hagin</span>
              <small className="px-2">$ 3.4</small>
              <button className="btn download text-white">
                <FaCartPlus />
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
