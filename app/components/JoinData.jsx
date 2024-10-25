"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaQuora,
  FaUser,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function JoinData() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });

  const handleJoinNowClick = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (event) => {
    console.log(event.target);

    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    let hasError = false;
    const newErrors = { name: "", email: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is Required";
      hasError = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is Required";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter Valid Email";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      setFormData({ name: "", email: "" });
      setShowForm(!showForm);
      alert("Thank you for joining the waitlist");
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-between text-white">
      <main className="text-center mt-28 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 font-[family-name:ClashGrotesk-Medium]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight mb-4">
          Unlock the future of AI with{" "}
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-[550] bg-clip-text text-transparent bg-gradient-to-r from-[#0192ff] to-[#8E54E9] font-[family-name:Astromax-Regular]">
            MANTIBOT.AI
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] leading-tight mb-8">
          Join now and be the first to hear when it&apos;s ready!
        </h2>

        {showForm && (
          <div className="mx-auto p-4 mt-8 w-full max-w-lg rounded-lg shadow-l">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex px-3 py-2 items-center border border-gray-600 rounded-md text-xl">
                <span className="px-1 text-white">
                  <FaUser aria-hidden="true" />
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent text-white focus:outline-none text-sm sm:text-base md:text-lg"
                  placeholder="Full Name"
                  aria-label="Full Name"
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm flex justify-start pl-2">{errors.name}</p>}
              <div className="flex px-3 py-2 items-center border border-gray-600 rounded-md text-xl">
                <span className="px-1 text-white">
                  <FaEnvelope aria-hidden="true" />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent text-white focus:outline-none text-sm sm:text-base md:text-lg"
                  // className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm flex justify-start pl-2">{errors.email}</p>}
            </form>
          </div>
        )}

        <button
          className="p-[3px] relative w-full sm:w-[80%] md:w-[60%] lg:w-[500px] mt-8 sm:mt-12 md:mt-16"
          onClick={() => (showForm ? handleSubmit() : handleJoinNowClick())}
          aria-label={showForm ? "Submit" : "Join Now"}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0192ff] to-[#8E54E9] rounded-lg" />
          <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 text-lg sm:text-xl md:text-2xl bg-black rounded-[6px] relative group transition-all duration-400 text-white hover:bg-transparent">
            {showForm ? "Submit" : "Join Now"}
            {showForm && <FaArrowRight className="ml-2" aria-hidden="true" />}
          </div>
        </button>
      </main>

      <footer className="flex flex-wrap justify-center gap-4 p-4 sm:p-6 md:p-8 lg:p-10">
        <Link href="https://www.linkedin.com/company/pragetx/" aria-label="LinkedIn">
          <div className="bg-[#232323] w-12 h-12 sm:w-12 sm:h-12 p-3 sm:p-3 rounded-xl flex items-center justify-center hover:bg-[#0077B5] transition-colors duration-300">
            <FaLinkedinIn className="h-6 w-6" />
          </div>
        </Link>
        <Link href="https://x.com/PragetX" aria-label="Twitter">
          <div className="bg-[#232323] w-12 h-12 sm:w-12 sm:h-12 p-2 sm:p-3 rounded-xl flex items-center justify-center hover:bg-[#505050] transition-colors duration-300">
            <FaXTwitter className="h-6 w-6" />
          </div>
        </Link>
        <Link href="https://www.instagram.com/pragetx_technologies/" aria-label="Instagram">
          <div className="bg-[#232323] w-12 h-12 sm:w-12 sm:h-12 p-2 sm:p-3 rounded-xl flex items-center justify-center hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] transition-colors duration-300">
            <FaInstagram className="h-6 w-6" />
          </div>
        </Link>
        <Link href="https://www.facebook.com/PragetX" aria-label="Facebook">
          <div className="bg-[#232323] w-12 h-12 sm:w-12 sm:h-12 p-2 sm:p-3 rounded-xl flex items-center justify-center hover:bg-[#1877F2] transition-colors duration-300">
            <FaFacebookF className="h-6 w-6" />
          </div>
        </Link>
        <Link href="https://www.youtube.com/channel/UC4ju5EX2B5ptpTSIHOZbGLw" aria-label="YouTube">
          <div className="bg-[#232323] w-12 h-12 sm:w-12 sm:h-12 p-2 sm:p-3 rounded-xl flex items-center justify-center hover:bg-[#FF0000] transition-colors duration-300">
            <FaYoutube className="h-6 w-6" />
          </div>
        </Link>
        <Link href="https://www.quora.com/profile/PragetX" aria-label="Quora">
          <div className="bg-[#232323] w-12 h-12 sm:w-12 sm:h-12 p-2 sm:p-3 rounded-xl flex items-center justify-center hover:bg-[#A82400] transition-colors duration-300">
            <FaQuora className="h-6 w-6" />
          </div>
        </Link>
      </footer>
    </div>
  );
}

export default JoinData;
