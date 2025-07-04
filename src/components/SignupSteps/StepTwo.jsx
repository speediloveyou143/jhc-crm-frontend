import React from "react";
const StepTwo = ({ formData, handleChange, errors }) => (
  <>
    <h2 className="text-2xl font-bold mb-2">Company Name</h2>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Enter your company name
      </label>
      <input
        type="text"
        name="companyName"
        placeholder="e.g., BrightTech Pvt Ltd"
        value={formData.companyName}
        onChange={handleChange}
        className={`w-full p-3 rounded-lg bg-gray-100 border ${
          errors.companyName ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
      />
      {errors.companyName && (
        <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
      )}
    </div>
  </>
);

export default StepTwo;
