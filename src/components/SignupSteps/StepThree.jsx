import React from "react";

const StepThree = ({ formData, handleChange, phoneInput, errors }) => (
  <>
    <h2 className="text-2xl font-bold mb-4">Personal Details</h2>

    {/* Full Name */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
      <input
        type="text"
        name="fullName"
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={handleChange}
        className={`w-full p-3 rounded-lg bg-gray-100 border ${
          errors.fullName ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
      />
      {errors.fullName && (
        <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
      )}
    </div>

    {/* Email */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        className={`w-full p-3 rounded-lg bg-gray-100 border ${
          errors.email ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
      )}
    </div>

    {/* Phone Number */}
    <div className="mb-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
      {phoneInput}
      {errors.phone && (
        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
      )}
    </div>
  </>
);

export default StepThree;

