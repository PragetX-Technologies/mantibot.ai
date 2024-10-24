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
    <div className="flex flex-col h-screen justify-between">
      <div className="text-center p-8 pb-20 pt-40 font-[family-name:ClashGrotesk-Medium]">
        <h1 className="text-[60px]">
          Unlock the future of AI with{" "}
          <span className="text-[65px] font-[550] gradient-txt font-[family-name:Astromax-Regular] ">MANTIBOT.AI</span>
        </h1>
        <h1 className="text-[60px]">Join now and be the first to hear when it&apos;s ready!</h1>

        {/* Conditionally render the form */}
        {showForm && (
          <div className="mx-auto p-4 mt-8 w-full max-w-lg rounded-lg shadow-lg">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                // e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="flex px-3 py-2 items-center border border-gray-600 rounded-md text-xl ">
                <span className="px-1 text-white">
                  <FaUser />
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
                  placeholder="Full Name"
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm flex justify-start pl-2">{errors.name}</p>}
              <div className="flex px-3 py-2 items-center border border-gray-600 rounded-md text-xl ">
                <span className="px-1 text-white">
                  <FaEnvelope />
                </span>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
                  placeholder="Email Address"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm flex justify-start pl-2">{errors.email}</p>}
            </form>
          </div>
        )}

        <button
          className="p-[3px] relative w-[500px] mt-16 "
          onClick={() => (showForm ? handleSubmit() : handleJoinNowClick())}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0192ff] to-[#8E54E9] rounded-lg" />
          <div className="flex items-center justify-center px-8 py-2 text-2xl bg-black rounded-[6px] relative group transition-all duration-400 text-white hover:bg-transparent">
            {showForm ? "Submit" : "Join Now"}
            {showForm ? <FaArrowRight className="mx-3" /> : ""}
          </div>
        </button>
      </div>

      <div className="flex justify-center gap-x-4 pb-10">
        <Link href="https://www.linkedin.com/company/pragetx/" color="linkedin" type="button">
          <FaLinkedinIn className="bg-[#232323] w-12 h-12 p-3 rounded-xl items-center hover:bg-[#0077B5]" />
        </Link>
        <Link href="https://x.com/PragetX" color="x" type="button">
          <FaXTwitter className="bg-[#232323] w-12 h-12 p-3 rounded-xl items-center hover:bg-[#505050]" />
        </Link>
        <Link href="https://www.instagram.com/pragetx_technologies/" color="instagram" type="button">
          <FaInstagram className="bg-[#232323] w-12 h-12 p-3 rounded-xl items-center hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" />
        </Link>
        <Link href="https://www.facebook.com/PragetX" color="facebook" type="button">
          <FaFacebookF className="bg-[#232323] w-12 h-12 p-3 rounded-xl items-center hover:bg-[#1877F2]" />
        </Link>
        <Link href="https://www.youtube.com/channel/UC4ju5EX2B5ptpTSIHOZbGLw" color="youtube" type="button">
          <FaYoutube className="bg-[#232323] w-12 h-12 p-3 rounded-xl items-center hover:bg-[#FF0000]" />
        </Link>
        <Link href="https://www.quora.com/profile/PragetX" color="quora" type="button">
          <FaQuora className="bg-[#232323] w-12 h-12 p-3 rounded-xl items-center hover:bg-[#A82400]" />
        </Link>
      </div>
    </div>
  );
}

export default JoinData;
