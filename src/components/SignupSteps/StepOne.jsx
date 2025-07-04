import React from "react";
const StepOne = ({ formData, handleChange, errors }) => (
  <>
    <h2 className="text-2xl font-bold">Let's get started</h2>
    <p className="text-gray-600 mb-4">Select your business type</p>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
      <select
        name="businessType"
        className={`w-full p-3 rounded-lg bg-gray-100 border ${
          errors.businessType ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
        value={formData.businessType}
        onChange={handleChange}
      >
        <option value="">Select...</option>
        <option value="Retail">Retail</option>
        <option value="IT">IT</option>
        <option value="Education">Education</option>
        <option value="Healthcare">Healthcare</option>
      </select>
      {errors.businessType && (
        <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>
      )}
    </div>
  </>
);

export default StepOne;

