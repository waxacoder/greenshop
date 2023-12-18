import React from "react";
import { Button } from "../../common";
import { GoArrowRight } from "react-icons/go";

export const Info = () => {
  const flower1 = "https://i.ibb.co/Y3BMNXm/image-7.png";
  const flower2 = "https://i.ibb.co/Msq64Zb/image-2.png";
  return (
    <div className="flex justify-between  mb-[146px] bg-white">
      <div className="bg-grey w-[585px] h-[270px] flex items-center justify-between pr-[30px] pl-[10px] px-[10px]">
        <img src={flower1} alt="flower 1" />
        <div className="flex flex-col justify-end">
          <h3 className="text-right text-black text-lg font-bold uppercase leading-normal">
            Summer cactus
            <br />& succulents
          </h3>
          <p className=" text-right text-neutral-500 text-sm font-normal leading-normal mt-[9px]">
            We are an online plant shop offering a wide <br /> range of cheap
            and trendy plants
          </p>
          <div className="flex justify-end mt-[25px] ">
            <Button>
              Find More
              <GoArrowRight />
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-grey w-[585px] h-[270px] flex items-center justify-between pr-[30px] pl-[10px] px-[10px]">
        <img src={flower2} alt="flower 2" />
        <div className="flex flex-col justify-end">
          <h3 className="text-right text-black text-lg font-bold uppercase leading-normal">
            Styling Trends
            <br />& much more
          </h3>
          <p className=" text-right text-neutral-500 text-sm font-normal leading-normal mt-[9px]">
            We are an online plant shop offering a wide <br /> range of cheap
            and trendy plants
          </p>
          <div className="flex justify-end mt-[25px] ">
            <Button>
              Find More
              <GoArrowRight />
            </Button>
          </div>
         
        </div>
      </div>
    </div>
  );
};
