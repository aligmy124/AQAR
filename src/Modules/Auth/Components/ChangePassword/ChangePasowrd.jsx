import React from 'react';
import img from "../../../../assets/img/image.jpg";
import AuthComponent from '../../../Usable/Component/AuthComponent/AuthComponent';
import { Link } from 'react-router-dom';

export default function ChangePassword() {
  const form = () => {
    return (
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
      <div className="col-12 col-lg-11 col-xl-10">
        <div className="card-body p-3 p-md-4 p-xl-5">
          <div className="text-center mb-4">
            <h4 className="text-start">Change Password</h4>
          </div>
          <form >
            <div className="row gy-3 overflow-hidden ">
            <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="OldPassword"
                    id="OldPassword"
                    placeholder="OldPassword"
                    required
                  />
                  <label htmlFor="OldPassword" className="form-label">OldPassword</label>
                </div>
              </div>
            <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="NewPassword"
                    id="NewPassword"
                    placeholder="NewPassword"
                    required
                  />
                  <label htmlFor="NewPassword" className="form-label">NewPassword</label>
                </div>
              </div>
            <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="ConfirmPassword"
                    id="ConfirmPassword"
                    placeholder="ConfirmPassword"
                    required
                  />
                  <label htmlFor="ConfirmPassword" className="form-label">Confirm Password</label>
                </div>
              </div>
              <div className="col-12">
                <div className="d-grid">
                  <button className="btn btn-dark btn-lg" type="submit">Save</button>
                </div>
              </div>
            </div>
          </form>
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
