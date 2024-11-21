import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./AuthProvider";

const MyProfile = () => {
  let { user } = useContext(Context);

  return (
    user && (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
          {/* Welcome Message */}
          <div className="p-6 text-center">
            <h1 className="text-2xl font-bold text-blue-600">
              Welcome, {user?.displayName || "User"}!
            </h1>
            <p className="text-gray-500 mt-2">Here is show profile information.</p>
          </div>

          {/* Profile Information */}
          <div className="p-6 space-y-4">
            <div className="flex justify-center">
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt={user?.displayName || "User"}
                className="w-24 h-24 rounded-full border-2 border-blue-500"
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold">
                {user?.displayName || "John Doe"}
              </h2>
              <p className="text-gray-500">{user?.email || "user@example.com"}</p>
            </div>

            {/* Update Button */}
            <div className="mt-4">
              <Link
                to="/update-profile"
                className="btn btn-primary w-full text-white"
              >
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MyProfile;
