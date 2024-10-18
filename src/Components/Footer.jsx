import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#000] p-[5%]">
      <div className="grid grid-cols-3  max-[600px]:grid-cols-1 items-center justify-between gap-4">
        {/*---first column----*/}
        <div className="max-[600px]:text-center">
          <div>
            <a href="/" className="flex py-4 px-2">
              Logo
            </a>
            <p className="text-[16px] font-[400] text-[#C7C7C7] leading-[22.4px] robot">
              CUSP is dedicated to transforming the energy landscape in India by
              making solar power accessible and convenient for all. Our platform
              connects users with reliable service providers, ensuring a
              seamless transition to renewable energy.{" "}
            </p>
          </div>
        </div>
        {/*---second column----*/}
        <div className="text-center mb-6">
          <h2 className="text-[16px] font-[700] mb-3 text-[#F9F9F9] ad">
            Quick Links
          </h2>
          <div className="flex flex-col space-y-2 text-[#929BA2] text-[14px] font-[400]">
            <a className="robot" href="/about">
              About Us
            </a>
            <a className="robot" href="/">
              Services
            </a>
            <a className="robot" href="/">
              Contact
            </a>
          </div>
          <div className="text-center ">
            <h4 className="text-[16px] font-[700] mb-3 text-[#F9F9F9] ad mt-5">
              Social Media Links
            </h4>
            <div className="flex gap-2 items-center justify-center mt-4">
              <BsFacebook className="text-white" />
              <BsTwitter className="text-white" />
              <FaYoutube className="text-white" />
            </div>
          </div>
        </div>
        {/*---third column----*/}
        <div className="text-center space-y-1">
          <p className="robot text-[18px] font-[300] text-white">
            +91 90009 23456
          </p>
          <p className="text-[#32C36C]">Email:info@cusp.com</p>
          <div className="text-[#929BA2]">
            <p>
              4th floor,ABC Building,
              <br /> 123 Mg Road,camp,Pune-411001,
              <br />
              Maharashtra,India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
