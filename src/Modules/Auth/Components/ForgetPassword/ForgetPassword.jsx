import React from 'react';
import img from "../../../../assets/img/image.jpg";
import AuthComponent from '../../../Usable/Component/AuthComponent/AuthComponent';
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
  const form = () => {
    return (
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
      <div className="col-12 col-lg-11 col-xl-10">
        <div className="card-body p-3 p-md-4 p-xl-5">
          <div className="text-center mb-4">
            <h4 className="text-start">Forget Password</h4>
          </div>
          <div className="gap-4 flex flex-col">
              <p>
                If you already have an account register
                <br /> You can{" "}
                <Link
                  className="font-bold hover:underline transition-all duration-300 text-red-500"
                  to={"/auth/login"}
                >
                  Login here
                </Link>
                !
              </p>
            </div>
          <form >
            <div className="row gy-3 overflow-hidden">
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="name@example.com"
                    required
                  />
                  <label htmlFor="email" className="form-label">Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="d-grid">
                  <button className="btn btn-dark btn-lg" type="submit">Reset Password</button>
                </div>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-12">
              <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                <a href="#!" className="link-secondary text-decoration-none">Create new account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
  return (
    <AuthComponent
    form={form()}
    img={img}
    
    />
  );
}
