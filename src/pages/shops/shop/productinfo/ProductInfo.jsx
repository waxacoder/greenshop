import { Link } from "react-router-dom";
import { CiSearch, CiHeart } from "react-icons/ci";
import {
  FaStar,
  FaPlus,
  FaMinus,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import { Button } from "../../../../components/common";
export const ProductInfo = () => {
  const flower1 = "https://i.ibb.co/9GGfXX7/product-20-320x320-1.png";
  const flower2 = "https://i.ibb.co/GR6BT8M/image-1.png";
  const [count, setCount] = useState(1);
  const [indexImage, setIndexImage] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const images = [flower1, flower2, flower1, flower2];

  return (
    <div className="mb-[94px]">
      <div className="flex gap-[5px] mt-[36px]">
        <Link className="font-bold">Home </Link>
        <Link>/ Shop</Link>
      </div>
      <div className="mt-[43px] flex justify-between">
        <div>
          <div className="flex gap-[29px]">
            <div>
              {images.map((image, index) => (
                <img
                  onClick={() => setIndexImage(index)}
                  onMouseOver={() => setIndexImage(index)}
                  src={image}
                  alt="flower 1"
                  className={`w-[100px] h-[100px] ${
                    index === indexImage ? "border border-green" : " "
                  } `}
                />
              ))}

              {/* <img
                src={flower2}
                alt="flower 2"
                className="w-[100px] h-[100px] border border-green"
              />
              <img
                src={flower1}
                alt="flower 1"
                className="w-[100px] h-[100px]"
              />
              <img
                src={flower2}
                alt="flower 2"
                className="w-[100px] h-[100px]"
              /> */}
            </div>
            <div className="relative ">
              <img
                className="w-[404px] h-[404px] mix-blend-multiply"
                src={images[indexImage]}
                alt="flower 2"
              />
              <CiSearch className="w-[28px] h-[28px] absolute top-9 right-1 bg-grey rounded-full px-1" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-black text-[28px] font-bold mb-[23px]">
            Barberton Daisy
          </h2>
          <div className="flex gap-[260px] items-center">
            <h3 className="text-green text-[22px] font-bold font-['Cera Pro'] leading-none">
              $119.00
            </h3>
            <div className="flex gap-[11px] items-center ">
              <div className="flex gap-[3px] items-center">
                <FaStar className="text-[#FFAC0C]" />
                <FaStar className="text-[#FFAC0C]" />
                <FaStar className="text-[#FFAC0C]" />
                <FaStar className="text-[#FFAC0C]" />
                <FaStar className="text-grey-7" />
              </div>
              <p className="text-black text-[15px]">19 Customer Review</p>
            </div>
          </div>
          <hr className="border-[0.3px] border-green my-[15px]" />
          <h4 className="text-black text-[15px] font-medium ">
            Short Description:
          </h4>
          <p className="w-[573px] text-neutral-500 text-sm  mt-[10px] leading-7">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off <br />
            the ground. The ceramic cylinder planters come with a wooden stand
            to help elevate <br />
            your plants off the ground.
          </p>
          <h4 className="text-black text-[15px] font-medium mb-[11px]">
            Size:
          </h4>
          <div className="flex gap-[10px] ">
            <p className="flex items-center justify-center  w-7 h-7 text-[#717171]  rounded-full border border-solid transition-all relative hover:before:w-full hover:font-bold  hover:text-green  before:absolute before:bottom-0 before:w-[0%] before:h-[3px] hover:border-green">
              S
            </p>
            <p className="flex items-center justify-center  w-7 h-7 text-[#717171]  rounded-full border border-solid transition-all relative hover:before:w-full hover:font-bold  hover:text-green  before:absolute before:bottom-0 before:w-[0%] before:h-[3px] hover:border-green">
              M
            </p>

            <p className="flex items-center justify-center  w-7 h-7 text-[#717171]  rounded-full border border-solid transition-all relative hover:before:w-full hover:font-bold  hover:text-green  before:absolute before:bottom-0 before:w-[0%] before:h-[3px] hover:border-green">
              L
            </p>

            <p className="flex items-center justify-center  w-7 h-7 text-[#717171]  rounded-full border border-solid transition-all relative hover:before:w-full hover:font-bold  hover:text-green  before:absolute before:bottom-0 before:w-[0%] before:h-[3px] hover:border-green">
              XL
            </p>
          </div>
          <div className="flex gap-[26px] items-center mt-[23px]">
            <div className="flex gap-[23px] items-center ">
              <div onClick={decrement}>
                <Button>
                  <FaMinus />
                </Button>
              </div>
              <span className="w-3">{count}</span>
              <div onClick={increment}>
                <Button>
                  <FaPlus />
                </Button>
              </div>
            </div>

            <div className="flex gap-[10px]">
              <Button>
                <p className="text-white text-sm font-bold px-[16px]  uppercase leading-tight">
                  Buy NOW
                </p>
              </Button>
              <Link to={"/shop/shopping-cart"}>
                <button className="text-green text-sm font-bold uppercase leading-tight rounded-md border border-green px-[20px] py-[11px]">
                  Add to cart
                </button>
              </Link>
              <button className="text-green text-sm font-bold uppercase leading-tight rounded-md border border-green px-[12px] py-[11px]">
                <CiHeart className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-[26px] mb-[20px]">
            <p className="text-neutral-500 text-[15px] ">
              <span className="text-neutral-400 ">SKU: </span>
              1995751877966
            </p>

            <p className="text-neutral-500 text-[15px] ">
              <span className="text-neutral-400 ">Categories: </span>
              1995751877966
            </p>

            <p className="text-neutral-500 text-[15px] ">
              <span className="text-neutral-400  ">Tags: </span>
              Home, Garden, Plants
            </p>
          </div>

          <div className="flex items-center gap-4 ">
            <p className="text-neutral-700 text-[15px] font-medium ">
              Share this products:
            </p>
            <div className="flex gap-[20px]">
              <Link>
                {" "}
                <FaFacebookF className="text-[#3D3D3D]" />
              </Link>
              <Link>
                <FaTwitter className="text-[#3D3D3D]" />
              </Link>
              <Link>
                <FaLinkedinIn className="text-[#3D3D3D]" />
              </Link>
              <Link>
                <HiOutlineMail className="text-[#3D3D3D]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
