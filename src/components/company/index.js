import React from "react";

const Company = () => {
  return (
    <section className="py-[136px] bg-bg">
      <div className="max-w-container mx-auto flex">
        <div className="w-[413px] h-[361px] bg-primary">
          <h2 className="font-pop font-bold text-4xl text-white text-center py-[100px] px-[75px] leading-[54px]">
            Learn more about our company
          </h2>
        </div>
        <div
          className="w-[726px] h-[361px] px-[280px] py-[160px]"
          style={{ background: "url(assets/images/company.png)" }}
        >
          <a
            href="#"
            className="font-pop font-semibold text-primary text-base inline-block bg-white py-3 px-8 border border-solid border-white hover:bg-transparent hover:border-primary hover:text-white ease-linear duration-300  "
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Company;
