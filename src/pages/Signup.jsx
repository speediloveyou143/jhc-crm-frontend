import React, { useState } from "react";
import confetti from "canvas-confetti";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { SHA256 } from "crypto-js";

import StepOne from "../components/SignupSteps/StepOne";
import StepTwo from "../components/SignupSteps/StepTwo";
import StepThree from "../components/SignupSteps/StepThree";
import StepFour from "../components/SignupSteps/StepFour";
import SuccessMessage from "../components/SignupSteps/SuccessMessage";

const Signup = () => {
  const [step, setStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    businessType: "",
    companyName: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    const fullPhone = `+${value}`;
    setFormData((prev) => ({ ...prev, phone: fullPhone }));
  };

  const togglePassword = (id) => {
    const el = document.getElementById(id);
    if (el) el.type = el.type === "password" ? "text" : "password";
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 0) {
      if (!formData.businessType) newErrors.businessType = "Business type is required.";
      console.log(`Step 1 - Business type: ${formData.businessType || "Not selected"}`);
    }

    if (step === 1) {
      if (!formData.companyName.trim()) newErrors.companyName = "Company name is required.";
      console.log(`Step 2 - Company Name: ${formData.companyName || "Not entered"}`);
    }

    if (step === 2) {
      console.log(`Step 3 - Full Name: ${formData.fullName || "Not entered"}`);
      console.log(`Step 3 - Email: ${formData.email || "Not entered"}`);
      console.log(`Step 3 - Phone: ${formData.phone || "Not entered"}`);

      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required.";
      } else if (!/^[A-Za-z\s]{2,40}$/.test(formData.fullName)) {
        newErrors.fullName = "Full name must be 2-40 characters long.";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required.";
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
        newErrors.email = "Invalid email address.";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required.";
      } else if (!/^\+\d{10,15}$/.test(formData.phone)) {
        newErrors.phone = "Phone number must be valid and include country code.";
      }
    }

    if (step === 3) {
      console.log(`Step 4 - Password: ${formData.password ? "Entered" : "Not entered"}`);
      console.log(`Step 4 - Confirm Password: ${formData.confirmPassword ? "Entered" : "Not entered"}`);

      if (!formData.password) {
        newErrors.password = "Password is required.";
      } else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}/.test(formData.password)) {
        newErrors.password = "Password must be 8–16 chars, 1 uppercase & 1 special char.";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password.";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match.";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => {
        setErrors({});
      }, 3000);
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) {
      return;
    }

    if (step === 3) {
      const encryptedData = {
        ...formData,
        password: SHA256(formData.password).toString(),
        confirmPassword: SHA256(formData.confirmPassword).toString(),
      };

      console.log("\u2705 Final Encrypted Data Submitted:", encryptedData);

      showConfetti();
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          businessType: "",
          companyName: "",
          fullName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
        setStep(0);
      }, 3000);

      return;
    }

    setStep((s) => s + 1);
  };

  const handleBack = () => setStep((s) => Math.max(0, s - 1));

  const showConfetti = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  if (showSuccess) return <SuccessMessage />;

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="flex-1 relative hidden md:block">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 blur-sm"
          style={{ backgroundImage: 'url("/assets/bunny-balloons.jpeg")' }}
        />
      </div>
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <form className="space-y-6">
            {step === 0 && (
              <StepOne
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            )}
            {step === 1 && (
              <StepTwo
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            )}
            {step === 2 && (
              <StepThree
                formData={formData}
                handleChange={handleChange}
                errors={errors}
                phoneInput={
                  <PhoneInput
                    country={"in"}
                    value={formData.phone.replace("+", "")}
                    onChange={handlePhoneChange}
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: false,
                    }}
                    inputClass="!w-full !py-2 !pl-14 !pr-4 !rounded-lg !border !border-gray-300 focus:!ring-2 focus:!ring-[#592DBB]"
                    containerClass="!w-full"
                    buttonClass="!bg-white"
                  />
                }
              />
            )}
            {step === 3 && (
              <StepFour
                formData={formData}
                handleChange={handleChange}
                togglePassword={togglePassword}
                errors={errors}
              />
            )}
            <div className="flex justify-between pt-4">
              {step > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                >
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
              >
                {step === 3 ? "Submit" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
