import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = ()=>{
    setOpen(!open)
  }
  
  useEffect(()=>{
    if(window.innerWidth >= 768){
      setOpen(true)
    }
    function screenResize(){
      console.log(window.innerWidth)
      if(window.innerWidth >= 768){
        setOpen(true)
      }else{
        setOpen(false)
      }
    }
    window.addEventListener("resize", screenResize)
  },[])

  return (
    <nav className="bg-primary relative">
      <div className="max-w-container mx-auto px-2.5 md:px-0">
        <div className="md:flex py-[30px]">
          <div className="md:w-1/5 ">
            <picture>
              <img src="assets/images/logo.png" loading="lazy" />
            </picture>
          </div>
          <button onClick={handleOpen} className="block md:hidden absolute top-9 right-[10px] text-white border solid-white p-[5px] rounded-[3px] text-2xl">
            <FaBars />
          </button>

          {open && (
            <div className="md:w-4/5 md:flex block items-center justify-end">
              <ul className="flex flex-col md:flex-row py-4 md:py-0 md:gap-x-12 gap-y-4 md:gap-y-0 font-pop font-semibold text-base text-white">
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
                className="font-pop font-semibold text-white text-base inline-block border border-solid border-white py-3 px-8 md:ml-16 "
              >
                CONTACT
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
