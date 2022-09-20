import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMarkEmailUnread, MdOutlineLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="py-[150px] bg-[#1F1F1F]">
      <div className="max-w-container mx-auto flex justify-between">
        <div className="w-[500px] ">
          <div className="mb-[33px]">
            <picture>
              <img src="assets/images/logo.png" loading="lazy" />
            </picture>
          </div>
          <div className="w-2/4 flex flex-wrap">
            <p className="font-pop text-xs font-normal relative pl-6 text-white mb-[15px] ">
              <MdOutlineMarkEmailUnread className="absolute top-0 left-0 w-5 h-5" />{" "}
              mail@yourcompany.com
            </p>
            <p className="font-pop text-xs font-normal relative pl-6 text-white mb-[15px]">
              <BiPhoneCall className="absolute top-0 left-0 w-5 h-5" />
              +896 120 5889 (Toll free)
            </p>
            <p className="font-pop text-xs font-normal relative pl-6 text-white mb-[34px]">
              <MdOutlineLocationOn className="absolute top-0 left-0 w-5 h-5" />
              101 Baker Street, New York, USA, 12345
            </p>
            <div className="flex gap-x-3 ">
              <div className="rounded-[50px] p-[12px] bg-primary cursor-pointer">
                <FaFacebookF className="text-white w-4 h-4" />
              </div>
              <div className="rounded-[50px] p-[12px] bg-primary cursor-pointer">
                <AiOutlineTwitter className="text-white w-4 h-4" />
              </div>
              <div className="rounded-[50px] p-[12px] bg-primary cursor-pointer">
                <ImLinkedin2 className="text-white w-4 h-4" />
              </div>
              <div className="rounded-[50px] p-[12px] bg-primary cursor-pointer">
                <BsInstagram className="text-white w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[173px]">
          <h3 className="font-pop font-bold text-base text-white">Company</h3>
          <ul>
            <li className="font-pop font-normal text-[14px] text-white py-[15px]">
              Home
            </li>
            <li className=" font-pop font-normal text-[14px] text-white mb-[15px]">
              About
            </li>
            <li className=" font-pop font-normal text-[14px] text-white mb-[15px]">
              Services
            </li>
            <li className=" font-pop font-normal text-[14px] text-white ">
              Gallery
            </li>
          </ul>
        </div>
        <div className="w-[173pxpx]">
          <h3 className="font-pop font-bold text-base text-white ">Others</h3>
          <ul>
            <li className="font-pop font-normal text-[14px] text-white py-[15px]">
              Blog
            </li>
            <li className=" font-pop font-normal text-[14px] text-white mb-[15px]">
              Contact
            </li>
            <li className=" font-pop font-normal text-[14px] text-white mb-[15px]">
              Terms & Conditions
            </li>
            <li className=" font-pop font-normal text-[14px] text-white ">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="w-[225px]">
          <h3 className="font-pop font-bold text-base text-white mb-[15px]">
            Certificate
          </h3>
          <div className="flex gap-[5px]">
            <img src="assets/images/cert1.png" leading="lazy" />
            <img src="assets/images/cert2.png" leading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
