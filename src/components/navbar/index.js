import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="max-w-container mx-auto">
        <div className="flex py-[30px]">
          <div className="w-1/5 ">
            <picture>
              <img src="assets/images/logo.png" loading="lazy" />
            </picture>
          </div>
          <div className="w-4/5 flex items-center justify-end">
            <ul className="flex gap-x-12 font-pop font-semibold text-base text-white">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            <a
              href="#"
              className="font-pop font-semibold text-white text-base inline-block border border-solid border-white py-3 px-8 ml-16 "
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
