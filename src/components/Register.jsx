import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from './AuthProvider';

const Register = () => {
  let { createRegistered,googleSign,updateUserProfile } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);

  let link=useNavigate()

  let handleGoogle=()=>{
    googleSign()
    .then((result) => {
      toast.success('Google Sign in successfully!');
      link("/")
    }).catch((error) => {
      toast.error(error.message || 'Failed to create account.');
    });
  }

  const validatePassword = (password) => {
    const errors = [];
    if (!/[A-Z]/.test(password)) errors.push('Password must contain at least one uppercase letter.');
    if (!/[a-z]/.test(password)) errors.push('Password must contain at least one lowercase letter.');
    if (password.length < 6) errors.push('Password must be at least 6 characters long.');
    return errors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    let profileUpdates={
      displayName: name,
      photoURL: photoURL
    }

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      passwordErrors.forEach((error) => toast.error(error));
      return;
    }

    createRegistered(email, password)
      .then((result) => {
        toast.success('Account created successfully!');
        updateUserProfile(result.user,profileUpdates)
        .then((result)=>{
          // console.log("profile Updated")
        })
        .catch((error)=>{
          // console.log(error)

        })
        form.reset();
        link("/")

      })
      .catch((error) => {
        toast.error(error.message || 'Failed to create account.');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        {/* Registration Title */}
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Register Your Account</h2>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Photo URL Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password Field with Toggle */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full pr-10"
                required
              />
              {/* Eye Icon for Toggling Password */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10c0 .898-.12 1.768-.344 2.597M12 15a3 3 0 100-6 3 3 0 000 6z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.98 8.798a9.987 9.987 0 00-.495 2.91c0 .917.114 1.806.33 2.648m1.325 2.65a9.971 9.971 0 007.86 3.91c5.523 0 10-4.477 10-10 0-.898-.12-1.768-.344-2.597M12 4a10.052 10.052 0 00-7.857 4.195M12 4V2m0 2v2m0 10v2m0-2h2m-2 0h-2"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <button onClick={handleGoogle} type="submit" className="btn btn-primary w-full mt-5">
          Sign In With Google
        </button>
        <p className="text-center mt-5">
          Already have an Account? Please
          <Link to="/login" className="text-blue-500 font-bold ms-2">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
