import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CiShoppingCart, CiSearch, CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Button } from "../../common";
import sale from "/images/Super Sale.svg";
import saleFlower from "/images/sale flower image.png";
export const Hero = () => {
  const [rangeValue, setRangeValue] = useState(700);
  const minRangeValue = 39;

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };
  const calculateBackground = () => {
    const value = (rangeValue / 1230) * 100;
    return `linear-gradient(to right, #46A358 0%, #46A358 ${value}%, #46A35833 ${value}%, #46A35833 100%)`;
  };

  const img1 = "https://i.ibb.co/GR6BT8M/image-1.png";
  const img2 = "https://i.ibb.co/gS7sWT9/product-21-320x320-1.png";
  const img3 = "https://i.ibb.co/Msq64Zb/image-2.png";
  const img4 = "https://i.ibb.co/GMtSkw0/01-3.png";
  const img5 = "https://i.ibb.co/Y3BMNXm/image-7.png";
  const img6 = "https://i.ibb.co/RhWF32b/image-8.png";
  const img7 = "https://i.ibb.co/KXsmYW3/image-9.png";
  const img8 = "https://i.ibb.co/9GGfXX7/product-20-320x320-1.png";
  const img9 = "https://i.ibb.co/vHt9Lrk/image-10.png";
  return (
    <div className="flex gap-[50px] mb-[101px]">
      <div className="flex flex-col items-center w-[310px]">
        <div className="bg-grey pt-[14px] pl-[18px] pr-[24px] pb-[19px] w-[310px] ">
          <h3 className="text-neutral-700 text-lg font-bold font-['Cera Pro'] leading-none">
            Categories
          </h3>
          <ul className="text-neutral-700 text-[15px] font-normal  leading-1 flex flex-col gap-[18px] mt-[20px] ml-[12px]">
            <li className="text-green font-bold">
              <Link>
                <div className="flex justify-between">
                  <p>House Plants</p> <p>(33)</p>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <div className="flex justify-between">
                  <p>Potter Plants</p> <p>(12)</p>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <div className="flex justify-between">
                  <p>Seeds</p> <p>(65)</p>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <div className="flex justify-between">
                  <p>Small Plants</p> <p>(39)</p>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <div className="flex justify-between">
                  <p>Big Plants</p> <p>(23)</p>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <div className="flex justify-between">
                  <p>Succelents</p> <p>(17)</p>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <div className="flex justify-between">
                  <p>Trerrariums</p> <p>(19)</p>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <div className="flex justify-between">
                  <p>Gardening</p> <p>(13)</p>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <div className="flex justify-between">
                  <p>Accessories</p> <p>(18)</p>
                </div>
              </Link>
            </li>
          </ul>
          <h3 className="text-neutral-700 text-lg font-bold font-['Cera Pro'] leading-none mt-[36px]">
            Price Range
          </h3>
          <div className="mt-[20px] mb-[15px] ml-[12px]">
            <div className="flex items-center ">
              <div className="w-[15px] h-[15px] bg-green rounded-full border-3 border-white" />
              <input
                id="myinput"
                min={minRangeValue}
                max="1230"
                type="range"
                value={rangeValue}
                onChange={handleRangeChange}
                style={{
                  background: calculateBackground(),
                  borderRadius: "1px",
                  height: "4px",
                  width: "209px",
                  outline: "none",
                  transition: "background 450ms ease-in",
                  WebkitAppearance: "none",
                }}></input>
            </div>
            <div className="mt-[15px]">
              <p className="text-black text-[15px] font-normal font-['Cera Pro'] leading-none mb-[24px]">
                Price:{" "}
                <span className="text-green font-bold">
                  $39 - ${rangeValue}
                </span>
              </p>
              <Button>
                <span className="px-[10px] font-bold ">Filter</span>
              </Button>
            </div>
          </div>
          <h3 className="text-neutral-700 text-lg font-bold font-['Cera Pro'] leading-none mt-[36px]">
            Size
          </h3>
          <div className="ml-[12px] mt-[20px]">
            <ul className="text-neutral-700 text-[15px] font-normal  leading-1 flex flex-col gap-[18px]">
              <li>
                <Link>
                  <div className="flex justify-between">
                    <p>Small</p> <p>(119)</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link>
                  <div className="flex justify-between">
                    <p>Medium</p> <p>(86)</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link>
                  <div className="flex justify-between">
                    <p>Large</p> <p>(78)</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <img className="mx-[22px]" src={sale} alt="sale" />
          <h3 className="text-center text-neutral-700 text-[23px] font-bold  leading-none mt-[11px]">
            UP TO 75% OFF
          </h3>
          <img className="" src={saleFlower} alt="flower image" />
        </div>
      </div>
      <div>
        <div className="flex justify-between  mb-[38px]">
          <ul className="flex gap-[37px] ">
            <li>
              <Link className="border-solid relative hover:before:w-full hover:font-bold hover:text-green before:absolute before:bottom-0 before:w-[0%] before:h-[3px] before:bg-green  border-green pb-[7px]  ">
                All Plants
              </Link>
            </li>
            <li>
              <Link className="border-solid relative hover:before:w-full hover:font-bold hover:text-green before:absolute before:bottom-0 before:w-[0%] before:h-[3px] before:bg-green  border-green pb-[7px]">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link className="border-solid relative hover:before:w-full hover:font-bold hover:text-green before:absolute before:bottom-0 before:w-[0%] before:h-[3px] before:bg-green  border-green pb-[7px]">
                Sale
              </Link>
            </li>
          </ul>
          <div className="flex gap-2">
            <p>Short by: </p>
            <p>
              {" "}
              Default sorting <IoIosArrowDown className="inline" />{" "}
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-between gap-y-[37px] ">
            <div className=" w-[250px]  ">
              <img src={img1} alt="image 1" />
              <h4 className="text-black mt-[18px]">Barberton Daisy</h4>
              <p className="text-green font-bold">$119.00</p>
            </div>

            <div className=" w-[250px]  ">
              <img src={img2} alt="image 2" />
              <h4 className="text-black mt-[18px]">Angel Wing Begonia</h4>
              <p className="text-green font-bold">$169.00</p>
            </div>

            <div className=" w-[250px]  ">
              <img src={img3} alt="image 3" />
              <h4 className="text-black mt-[18px]">African Violet</h4>
              <p className="text-green font-bold">
                $199.00 <span>$229.00</span>
              </p>
            </div>

            <div className=" w-[250px]  ">
              <img src={img4} alt="image 4" />
              <h4 className="text-black mt-[18px]">Beach Spider Lily</h4>
              <p className="text-green font-bold">$129.00</p>
            </div>

            <div className=" w-[250px]  ">
              <img className="mt-[17px]" src={img5} alt="image 5" />
              <h4 className="text-black mt-[38px]">Blushing Bromeliad</h4>
              <p className="text-green font-bold">$139.00</p>
            </div>

            <div className=" w-[250px]  ">
              <img src={img6} alt="Image 6" />
              <h4 className="text-black mt-[48px]">Aluminum Plant</h4>
              <p className="text-green font-bold">$179.00</p>
            </div>

            <div className=" w-[250px]  ">
              <img src={img7} alt="image 7" />
              <h4 className="text-black mt-[18px]">Bird's Nest Fern</h4>
              <p className="text-green font-bold">$99.00</p>
            </div>

            <div className=" w-[250px]">
              <img src={img8} alt="image 8" />
              <h4 className="text-black mt-[18px]">Broadleaf Lady Palm</h4>
              <p className="text-green font-bold">$59.00</p>
            </div>

            <div className=" w-[250px]">
              <img src={img9} alt="image 9" />
              <h4 className="text-black mt-[18px]">Chinese Evergreen</h4>
              <p className="text-green font-bold">$39.00</p>
            </div>
          </div>

          <div className="flex  gap-[10px] justify-end mt-[90px]">
            <div className="w-[35px] h-[35px] flex justify-center items-center bg-green rounded text-white text-lg font-bold">
              1
            </div>
            <div className="w-[35px] h-[35px] flex justify-center items-center rounded border border-grey-4 text-black">
              2
            </div>
            <div className="w-[35px] h-[35px] flex justify-center items-center rounded border border-grey-4 text-black">
              3
            </div>
            <div className="w-[35px] h-[35px] flex justify-center items-center rounded border border-grey-4 text-black">
              4
            </div>
            <div className="w-[35px] h-[35px] flex justify-center items-center rounded border border-grey-4 text-black">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
