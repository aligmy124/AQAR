import React from 'react';
import img from "../../../../assets/img/image.jpg";
import AuthComponent from '../../../Usable/Component/AuthComponent/AuthComponent';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';
import { USERS_URL } from '../../../../Api/Api';
import { Link } from 'react-router-dom';

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // token
  const token = localStorage.getItem("token");

  // submit handler
  const submit = async (data) => {
    try {
      const res = await axios.post(USERS_URL.changePassword, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Password changed successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to change password");
    }
  };

  const form = () => {
    return (
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center py-4">
        <div className="col-12 col-lg-11 col-xl-10">
          <div className="card-body p-3 p-md-4 p-xl-5">
            <div className="text-center mb-4">
              <h4 className="text-start">Change Password</h4>
            </div>
            <form onSubmit={handleSubmit(submit)}>
              <div className="row gy-3">
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className={`form-control ${errors.OldPassword ? "is-invalid" : ""}`}
                      {...register("OldPassword", { required: "Old password is required" })}
                      id="OldPassword"
                      placeholder="OldPassword"
                    />
                    <label htmlFor="OldPassword" className="form-label">Old Password</label>
                    {errors.OldPassword && (
                      <div className="invalid-feedback">{errors.OldPassword.message}</div>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className={`form-control ${errors.NewPassword ? "is-invalid" : ""}`}
                      {...register("NewPassword", {
                        required: "New password is required",
                        minLength: { value: 6, message: "Password must be at least 6 characters" }
                      })}
                      id="NewPassword"
                      placeholder="NewPassword"
                    />
                    <label htmlFor="NewPassword" className="form-label">New Password</label>
                    {errors.NewPassword && (
                      <div className="invalid-feedback">{errors.NewPassword.message}</div>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className={`form-control ${errors.ConfirmPassword ? "is-invalid" : ""}`}
                      {...register("ConfirmPassword", {
                        required: "Confirm password is required",
                        validate: (value) =>
                          value === watch("NewPassword") || "Passwords do not match",
                      })}
                      id="ConfirmPassword"
                      placeholder="ConfirmPassword"
                    />
                    <label htmlFor="ConfirmPassword" className="form-label">Confirm Password</label>
                    {errors.ConfirmPassword && (
                      <div className="invalid-feedback">{errors.ConfirmPassword.message}</div>
                    )}
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
    );
  };

  return <AuthComponent form={form()} img={img} />;
}
