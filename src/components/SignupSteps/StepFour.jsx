import React from "react";

const StepFour = ({ formData, handleChange, togglePassword, errors }) => (
  <>
    <h2 className="text-2xl font-bold mb-4">Password</h2>

    {/* Password */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
      <div className="relative flex items-center">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full p-3 pr-10 rounded-lg bg-gray-100 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
        />
        <span
          className="absolute right-3 cursor-pointer text-lg text-gray-600"
          onClick={() => togglePassword("password")}
        >
          👁
        </span>
      </div>
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
      )}
    </div>

    {/* Confirm Password */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
      <div className="relative flex items-center">
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={`w-full p-3 pr-10 rounded-lg bg-gray-100 border ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
        />
        <span
          className="absolute right-3 cursor-pointer text-lg text-gray-600"
          onClick={() => togglePassword("confirmPassword")}
        >
          👁
        </span>
      </div>
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
      )}
    </div>
  </>
);

export default StepFour;
