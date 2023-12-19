import React from "react";

export const Products = () => {
  const img1 = "https://i.ibb.co/GMtSkw0/01-3.png";
  const img2 = "https://i.ibb.co/Y3BMNXm/image-7.png";
  const img3 = "https://i.ibb.co/RhWF32b/image-8.png";
  const img4 = "https://i.ibb.co/KXsmYW3/image-9.png";
  const img5 = "https://i.ibb.co/vHt9Lrk/image-10.png";
  return (
    <div className="my-[127px]">
      <h4 className="text-green text-[17px] font-bold border-b-[0.2px] border-green border-opacity-50 pb-[12px]">
        Releted Products
      </h4>
      <div className="flex justify-between mt-[44px]">
        <div>
          <img src={img1} alt="image 1" className="w-[220px] h-[255px]" />
          <p className="text-black text-[15px] mt-[12px] ">Beach Spider Lily</p>
          <h4 className="text-green text-base font-bold ">$129.00</h4>
        </div>

        <div className="pt-[20px]">
          <img src={img2} alt="image 2" className="w-[220px] h-[235px]" />
          <p className="text-black text-[15px] mt-[12px] ">
            Blushing Bromeliad
          </p>
          <h4 className="text-green text-base font-bold ">$139.00</h4>
        </div>

        <div>
          <img src={img3} alt="image 3" className="w-[220px] h-[255px]" />
          <p className="text-black text-[15px] mt-[12px] ">Aluminum Plant</p>
          <h4 className="text-green text-base font-bold ">$179.00</h4>
        </div>

        <div>
          <img src={img4} alt="image 4" className="w-[220px] h-[255px]" />
          <p className="text-black text-[15px] mt-[12px] ">Bird's Nest Fern</p>
          <h4 className="text-green text-base font-bold ">$99.00</h4>
        </div>

        <div>
          <img src={img5} alt="image 5" className="w-[220px] h-[255px]" />
          <p className="text-black text-[15px] mt-[12px] ">Chinese Evergreen</p>
          <h4 className="text-green text-base font-bold ">$39.00</h4>
        </div>
      </div>

      <div className="flex gap-[8px] justify-center mt-[61px]">
        <div className="w-3 h-3 rounded-full border border-green" />
        <div className="w-3 h-3  bg-green rounded-full" />
        <div className="w-3 h-3  rounded-full border border-green" />
      </div>
    </div>
  );
};
