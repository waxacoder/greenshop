import React from "react";
import { Button } from "../../common";
import garderCare from "/images/Garden Care.svg";
import plantRenovation from "/images/Plant Renovation.svg";
import wateringGraden from "/images/Garden Care.svg";
import logo from "/images/Logo.svg";
import location from "/images/Location.svg";
import message from "/images/Message.svg";
import call from "/images/Calling.svg";
import facebook from "/images/Facebook.svg";
import instagram from "/images/Instagram.svg";
import twitter from "/images/Twitter.svg";
import linkedin from "/images/Linkedin.svg";
import union from "/images/Union.svg";
import payment from "/images/payment.png";
export const Footer = () => {
  return (
    <div className="bg-grey">
      <div className="flex justify-between px-[25px] py-[25px]">
        <div>
          <img src={garderCare} alt="Garden care" />
          <h4 className="text-black text-[17px] font-bold mt-[19px] mb-[9px]">
            Garden Care
          </h4>
          <p className=" text-neutral-500 text-sm  leading-snug">
            We are an online plant shop <br /> offering a wide range of cheap{" "}
            <br /> and trendy plants.
          </p>
        </div>

        <div>
          <img src={plantRenovation} alt="Plant Renovation" />
          <h4 className="text-black text-[17px] font-bold mt-[19px] mb-[9px]">
            Plant Renovation
          </h4>
          <p className=" text-neutral-500 text-sm  leading-snug">
            We are an online plant shop <br /> offering a wide range of cheap{" "}
            <br /> and trendy plants.
          </p>
        </div>

        <div>
          <img src={wateringGraden} alt="Watering Graden" />
          <h4 className="text-black text-[17px] font-bold mt-[19px]  mb-[9px]">
            Watering Graden
          </h4>
          <p className=" text-neutral-500 text-sm  l">
            We are an online plant shop <br /> offering a wide range of cheap{" "}
            <br /> and trendy plants.
          </p>
        </div>

        <div>
          <h4 className="text-black text-lg font-bold mb-[18px]">
            Would you like to join newsletters?
          </h4>
          <div className="flex items-center mb-[17px]">
            <input
              className="rounded-tl-md rounded-bl-md shadow py-[12px] pl-[12px] w-[270px] bg-white"
              type="email"
              placeholder="enter your email address..."
            />
            <div className="bg-green w-[85px] h-[48px] flex items-center justify-center rounded-tr-md rounded-br-md">
              <Button>
                <span className="font-bold">Join</span>
              </Button>
            </div>
          </div>
          <p className="text-neutral-500 text-[13px] leading-6">
            We usually post offers and challenges in newsletter. We're <br />{" "}
            your online houseplant destination. We offer a wide range <br /> of
            houseplants and accessories shipped directly from our <br />{" "}
            (green)house to yours!
          </p>
        </div>
      </div>

      <div className="flex items-center gap-[70px] pl-[23px] py-[27px] bg-[#46A3581A]">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex items-center gap-[10px]">
          <img src={location} alt="Location" />
          <p className="text-neutral-700 text-sm font-normal font-['Cera Pro'] leading-5">
            70 West Buckingham Ave.
            <br />
            Farmingdale, NY 11735
          </p>
        </div>

        <div className="flex items-center gap-[10px]">
          <img src={message} alt="Message" />
          <p>contact@greenshop.com</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <img src={call} alt="Call" />
          <p>+88 01911 717 490</p>
        </div>
      </div>

      <div className="bg-grey flex gap-[160px] py-[30px] pl-[23px]">
        <div>
          <h4 className="text-neutral-700 text-lg font-bold leading-none mb-[8px]">
            My Account
          </h4>
          <div className="text-neutral-700 text-sm font-normal leading-[30px]">
            My Account
            <br />
            Our stores
            <br />
            Contact us
            <br />
            Career
            <br />
            Specials
          </div>
        </div>

        <div>
          <h4 className="text-neutral-700 text-lg font-bold mb-[8px]">Help & Guide</h4>
          <div className="text-neutral-700 text-sm font-normal leading-[30px]">
            Help Center
            <br />
            How to Buy
            <br />
            Shipping & Delivery
            <br />
            Product Policy
            <br />
            How to Return
          </div>
        </div>

        <div>
          <h4 className="text-neutral-700 text-lg font-bold mb-[8px]">Categories</h4>
          <div className="text-neutral-700 text-sm font-normal leading-[30px]">
            House Plants
            <br />
            Potter Plants
            <br />
            Seeds
            <br />
            Small Plants
            <br />
            Accessories
          </div>
        </div>

        <div>
          <h4 className="text-neutral-700 text-lg font-bold mb-[20px]">
            Social Media
          </h4>
          <div className="flex gap-[10px]">
            <div className="w-[30px] h-[30px] rounded border border-green-500 border-opacity-20 flex justify-center items-center">
              <img src={facebook} alt="Facebook" />
            </div>
            <div className="w-[30px] h-[30px] rounded border border-green-500 border-opacity-20 flex justify-center items-center">
              <img src={instagram} alt="Instagram" />
            </div>
            <div className="w-[30px] h-[30px] rounded border border-green-500 border-opacity-20 flex justify-center items-center">
              <img src={twitter} alt="Twitter" />
            </div>

            <div className="w-[30px] h-[30px] rounded border border-green-500 border-opacity-20 flex justify-center items-center">
              <img src={linkedin} alt="Linkedin" />
            </div>

            <div className="w-[30px] h-[30px] rounded border border-green-500 border-opacity-20 flex justify-center items-center">
              <img src={union} alt="Union" />
            </div>
          </div>
          <h4 className="text-neutral-700 text-lg font-bold mt-[33px] mb-[13px]">
            We accept
          </h4>
          <img className="w-56 h-[26px]" src={payment} alt="Payment" />
        </div>
      </div>
    </div>
  );
};
