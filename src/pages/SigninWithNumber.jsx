import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from 'libphonenumber-js';

function SigninWithNumber() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("in"); // default country
  const [acceptedTerms, setAcceptedTerms] = useState(false); // NEW
  const navigate = useNavigate();

  function handlenumber(e) {
    e.preventDefault();

    if (!acceptedTerms) {
      setError("Please accept the Terms and Privacy Policy.");
      return;
    }

    const parsedPhone = parsePhoneNumberFromString("+" + phone);

    if (parsedPhone && parsedPhone.isValid() && parsedPhone.country?.toLowerCase() === countryCode) {
      console.log("Valid phone number:", parsedPhone.number);
      setError("");
      navigate('/signin/validate');
    } else {
      setError("Please enter a valid mobile number for the selected country.");
    }
  }

  return (
    <div className="mt-4">
      <label className="block mb-2 text-[16px] font-medium text-gray-700">
        What is your Mobile Number?
      </label>

      <PhoneInput
        country={"in"}
        value={phone}
        onChange={(value, country) => {
          setPhone(value);
          setCountryCode(country.countryCode); // ISO2 country code
        }}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: false,
        }}
        inputClass="!w-full !py-2 !pl-14 !pr-4 !rounded-lg !border !border-gray-300 focus:!ring-2 focus:!ring-[#592DBB]"
        containerClass="!w-full"
        buttonClass="!bg-white"
      />

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 py-1 px-2 mt-4 rounded-md text-sm bg-red-100 text-red-700">
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10A8 8 0 1 1 2 10a8 8 0 0 1 16 0zM9 7a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V7zm2 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-medium">{error}</span>
        </div>
      )}

      {/* Terms and Conditions */}
      <label className="label mt-3 flex gap-2 items-start">
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
          className="checkbox border-[black] text-[black]"
        />
        <p>
          I Have Read And Accept The{" "}
          <span>
            <Link to="/privacy-policy">
              <u>Privacy Policy</u>
            </Link>
          </span>
        </p>
      </label>

      <button
        onClick={handlenumber}
        className="w-[250px] bg-[#592DBB] text-white font-semibold py-2 mt-4 rounded-lg hover:bg-[#471fa3] transition-all duration-300"
      >
        Send OTP
      </button>
    </div>
  );
}

export default SigninWithNumber;
