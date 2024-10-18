import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
const ImageFormLayout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when the field is modified
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required.";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number must be a 10-digit number.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email Address is not valid.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Send email using EmailJS
      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            // Optionally reset the form after successful submission
            setFormData({
              fullName: "",
              phoneNumber: "",
              email: "",
              message: "",
            });
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
    } else {
      // Display error messages
      console.log("Validation failed:", errors);
    }
  };

  return (
    <div className="container mx-auto">
      <h1
        className="text-5xl max-[600px]:text-2xl text-center text-[#00cc99] font-[600]  py-6"
        style={{ WebkitTextStroke: "1px #00cc99", color: "transparent" }}
      >
        Get In Touch
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
        {/* Left Section: Images */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <div className="about-us-2__wrapper flex flex-col space-y-6">
            {/* Main Image */}
            <div className="flex overflow-hidden">
              <div className="w-2/3">
                <img
                  src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/about-big-img.png"
                  alt="Main"
                  className="rounded-2xl"
                />
              </div>
              <div className="w-1/3">
                <img
                  src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/about-small-img.png"
                  alt="Small"
                  className=" rounded-2xl mt-[5rem]"
                />
              </div>
            </div>

            {/* Second Row: Experience & Medium Image */}
            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/images/choose-us-circle-img.png"
                  alt="circle-img"
                  className="rotate-animation"
                />
              </div>
              <div className="w-1/2">
                <img
                  src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/about-medium-img.png"
                  alt="Medium"
                  className=" mt-[-12rem] rounded-2xl"
                />
              </div>
            </div>
            {/* Decorative Shape */}
            <div>
              <img
                src="https://wp.rrdevs.net/routex/wp-content/themes/routex/assets/imgs/about/dotted-img.svg"
                alt="Decorative Shape"
                className="w-20 h-20 "
              />
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="md:w-1/2 w-full flex flex-col mt-8  md:mt-0 border border-[#00cc99] shadow-2xl rounded-3xl p-5">
          <div className="flex flex-col  h-full">
            <div className="section__title-wrapper mb-6">
              <h2 className="text-3xl font-bold text-center text-[#00cc99]">
                Contact Us
              </h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full" id="form">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your full name"
                required
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your phone number"
                required
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email address"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                rows="4"
                placeholder="Enter your message"
                required
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#00cc99] text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageFormLayout;
