import React from "react";

const Supplier = () => {
  return (
    <section>
      <div className="max-w-container mx-auto">
        <div className="flex justify-between mt-[78px]">
          <div className="max-w-[289px]">
            <h2 className="font-pop font-bold text-5xl leading-[72px]">
              The biggest supplier on the country
            </h2>
          </div>
          <div className="max-w-[651px] flex items-center">
            <p className="font-pop font-medium text-para leading-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-24">
        <div>
          <picture>
            <img src="assets/images/supplier1.png" loading="lazy" />
          </picture>
        </div>
        <div>
          <picture>
            <img src="assets/images/supplier2.png" loading="lazy" />
          </picture>
        </div>
        <div>
          <picture>
            <img src="assets/images/supplier3.png" loading="lazy" />
          </picture>
        </div>
        <div>
          <picture>
            <img src="assets/images/supplier4.png" loading="lazy" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Supplier;
