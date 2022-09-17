import React from "react";

const Banner = () => {
  return (
    <div style={{ background: "url(assets/images/banner.png)" }}>
      <div className="h-full w-full bg-darklight py-64">
        <div className="max-w-container mx-auto">
          <h1 className="font-pop font-bold text-[64px] w-[842px] text-white ">
            We exist since 1975 on the oil and gas industry.
          </h1>
          <a
            href="#"
            className="font-pop font-semibold text-white text-base inline-block bg-primary py-3 px-8 mt-8 border border-solid border-primary hover:bg-transparent hover:border-white ease-linear duration-300 "
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
