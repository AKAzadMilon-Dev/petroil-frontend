import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-black border-b-2 border-solid border-yellow">
      <div className="max-w-container py-[15px] mx-auto">
        <div className="flex">
          <div className="w-2/4 flex">
            <p className="font-pop text-xs font-normal relative pl-6 text-white after:absolute after:top-0 after:right-[-28px] after:w-0.5 after:h-full after:content-[''] after:bg-[#5C6A92]">
              <MdOutlineMarkEmailUnread className="absolute top-0 left-0 w-5 h-5" />{" "}
              mail@yourcompany.com
            </p>
            <p className="font-pop text-xs font-normal relative pl-6 text-white ml-16">
              <BiPhoneCall className="absolute top-0 left-0 w-5 h-5"/>
              +896 120 5889 (Toll free)
            </p>
          </div>
          <div className="w-2/4 flex justify-end gap-x-5 ">
            <FaFacebookF className="text-white w-4 h-4"/>
            <AiOutlineTwitter className="text-white w-4 h-4"/>
            <ImLinkedin2 className="text-white w-4 h-4"/>
            <BsInstagram className="text-white w-4 h-4"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
