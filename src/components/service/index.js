import React from "react";

const Service = () => {
  return (
    <section className="mt-7">
      <div className="flex flex-wrap">
        <div className="w-2/4 flex flex-col justify-center items-end ">
          <h2 className="font-pop font-bold text-[64px] mr-[149px]">
            Our Services
          </h2>
          <p className="font-pop font-medium text-base w-[405px] mr-[149px] text-para leading-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div
          className="w-2/4 "
          style={{ background: "url(assets/images/service1.png)" }}
        >
          <div className=" bg-darklight h-full w-full py-36 px-28">
            <h3 className="font-pop font-bold text-4xl text-white">
              Modern natural oil and gas refineries.
            </h3>
            <a
              href="#"
              className="font-pop font-semibold text-white text-base inline-block bg-primary py-3 px-8 mt-8 border border-solid border-primary hover:bg-transparent hover:border-white ease-linear duration-300"
            >
              LEARN MORE
            </a>
          </div>
        </div>
        <div
          className="w-2/4 "
          style={{ background: "url(assets/images/service2.png)" }}
        >
          <div className=" bg-darklight h-full w-full py-36 px-28">
            <h3 className="font-pop font-bold text-4xl text-white">
              Supply of national industries.
            </h3>
            <a
              href="#"
              className="font-pop font-semibold text-white text-base inline-block bg-primary py-3 px-8 mt-8 border border-solid border-primary hover:bg-transparent hover:border-white ease-linear duration-300"
            >
              LEARN MORE
            </a>
          </div>
        </div>
        <div
          className="w-2/4 "
          style={{ background: "url(assets/images/service3.png)" }}
        >
          <div className=" bg-darklight h-full w-full py-36 px-28">
            <h3 className="font-pop font-bold text-4xl text-white">
              National fuel distribution and supply.
            </h3>
            <a
              href="#"
              className="font-pop font-semibold text-white text-base inline-block bg-primary py-3 px-8 mt-8 border border-solid border-primary hover:bg-transparent hover:border-white ease-linear duration-300"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
