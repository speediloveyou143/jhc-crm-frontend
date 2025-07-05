import React, { useRef, useState } from 'react';

function OtpValidation() {
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e, idx) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);
    setErrorMessage(""); // Clear error when typing

    if (value && idx < inputsRef.current.length - 1) {
      inputsRef.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1].focus();
    }
  };

  const handleVerify = () => {
    if (otp.some((digit) => digit === "")) {
      setErrorMessage("Please enter all 4 digits of the OTP.");
      return;
    }

    const finalOtp = otp.join("");
    console.log("Entered OTP:", finalOtp);
    setErrorMessage(""); // Clear error
    // Optionally navigate: navigate('/')
  };

  const handleChangeNumber = () => {
    console.log("Change number clicked");
    // navigate('/signin') if needed
  };

  return (
    <div className="min-h-screen w-full mt-[-100px] bg-black flex items-center justify-center">
      <div className="p-10 rounded-2xl shadow-2xl bg-black text-white w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-3 flex items-center justify-center gap-2">
          <span role="img" aria-label="lock">🔐</span> Verification
        </h1>

        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          <p className="text-base text-gray-400 text-center">
            Enter the code sent to your mobile number
          </p>
          <button
            className="text-sm text-yellow-400 hover:underline hover:text-yellow-300"
            onClick={handleChangeNumber}
          >
            Change
          </button>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-5 mb-6">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength={1}
              value={digit}
              ref={(el) => (inputsRef.current[idx] = el)}
              onChange={(e) => handleChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className="w-14 h-14 text-center text-xl text-white border border-yellow-400 rounded-lg bg-transparent outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
            />
          ))}
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>
        )}

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-4">
          <button
            className="px-5 py-2 text-base font-semibold text-yellow-400 border border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition duration-200"
            onClick={() => console.log("Resend clicked")}
          >
            Resend
          </button>
          <button
            onClick={handleVerify}
            className="px-6 py-2 text-base font-semibold text-black bg-yellow-400 rounded-full hover:bg-yellow-500 transition duration-200"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtpValidation;
