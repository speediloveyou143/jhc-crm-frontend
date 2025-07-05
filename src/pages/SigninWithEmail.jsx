import React, { useState } from "react";
import signinvalidate from "./validatePages/SigninValidate";

function SigninWithEmail() {
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [color, setColor] = useState("");

  function handleSignin() {
    const validate = signinvalidate(signinData.email, signinData.password);
    if (validate) {
      setError(validate);
      setColor("red");
    } else {
      setError("Signin successful");
      setColor("green");
      console.log(signinData);
    }
  }

  return (
    <div className="mt-2">
      <label className="mb-4 block">
        <span className="text-[16px] font-medium text-gray-700">
          What is your Email?
        </span>
        <input
          type="text"
          placeholder="Email"
          value={signinData.email}
          onChange={(x) =>
            setSigninData({ ...signinData, email: x.target.value })
          }
          className="mt-1 w-full bg-white px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#592DBB]"
        />
      </label>

      <label className="mb-4 block">
        <span className="text-[16px] font-medium text-gray-700">
          What is your Password?
        </span>
        <input
          type="password"
          placeholder="Password"
          value={signinData.password}
          onChange={(x) =>
            setSigninData({ ...signinData, password: x.target.value })
          }
          className="mt-1 w-full bg-white px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#592DBB]"
        />
      </label>

      {/* Alert Box with dynamic icon */}
      {error && (
        <div
          className={`flex items-center gap-2 py-1 px-2 mt-4 rounded-md text-sm ${
            color === "red"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {color === "red" ? (
            // Red Circle with White X icon
            <svg
              className="w-5 h-5 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="12" fill="#B91C1C" />
              <path
                d="M15.78 8.22a.75.75 0 00-1.06 0L12 10.94 9.28 8.22a.75.75 0 00-1.06 1.06L10.94 12l-2.72 2.72a.75.75 0 101.06 1.06L12 13.06l2.72 2.72a.75.75 0 101.06-1.06L13.06 12l2.72-2.72a.75.75 0 000-1.06z"
                fill="white"
              />
            </svg>
          ) : (
            // Success tick icon
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <span className="font-medium">{error}</span>
        </div>
      )}

      <button
        className="w-[250px] bg-[#592DBB] text-white font-semibold py-2 mt-4 rounded-lg hover:bg-[#471fa3] transition-all duration-300"
        onClick={handleSignin}
      >
        Login
      </button>

      <p className="mt-4 text-gray-600">
        Don’t you have an account?{" "}
        <button className="text-[#592DBB] font-medium">Signup</button>
      </p>
    </div>
  );
}

export default SigninWithEmail;
