import React from "react";

const Blog = () => {
  return (
    <section className="py-[110px] bg-bg">
      <div className="max-w-container mx-auto flex justify-between">
        <div
          className="w-[339px] h-[401px] "
          style={{ background: "url(assets/images/blog1.png)" }}
        >
          <div className="w-full h-full bg-darklight px-[45px] pt-[75px]">
            <p className="font-pop font-bold text-[24px] leading-[36px] text-text ">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </p>
            <a
              href="#"
              className="font-pop font-medium text-white text-[12px] inline-block bg-button py-[10px] px-[22px] mt-[52px] hover:bg-transparent hover:text-white ease-linear duration-300  "
            >
              Read more
            </a>
          </div>
        </div>
        <div
          className="w-[339px] h-[401px] "
          style={{ background: "url(assets/images/blog2.png)" }}
        >
          <div className="w-full h-full bg-darklight px-[45px] pt-[75px]">
            <p className="font-pop font-bold text-[24px] leading-[36px] text-text ">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </p>
            <a
              href="#"
              className="font-pop font-medium text-white text-[12px] inline-block bg-button py-[10px] px-[22px] mt-[52px] hover:bg-transparent hover:text-white ease-linear duration-300  "
            >
              Read more
            </a>
          </div>
        </div>
        <div
          className="w-[339px] h-[401px] "
          style={{ background: "url(assets/images/blog3.png)" }}
        >
          <div className="w-full h-full bg-darklight px-[45px] pt-[75px]">
            <p className="font-pop font-bold text-[24px] leading-[36px] text-text ">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </p>
            <a
              href="#"
              className="font-pop font-medium text-white text-[12px] inline-block bg-button py-[10px] px-[22px] mt-[52px] hover:bg-transparent hover:text-white ease-linear duration-300  "
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
