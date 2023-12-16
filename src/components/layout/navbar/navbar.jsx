import React from "react";
import { CiShoppingCart, CiSearch, CiLogin } from "react-icons/ci";

import logo from "/images/Logo.svg";
import { Button } from "../../common";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  border-b-[0.3px] border-green">
      <img src={logo} alt="Logo" />
      <ul className="text-neutral-700 text-base font-bold   flex items-center gap-[50px] py-[27px]">
        <li>
          <Link className="border-solid transition-all relative hover:before:w-full  before:absolute before:bottom-0 before:w-[0%] before:h-[3px] before:bg-green  border-green  py-[31px] ">
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link className="border-solid relative hover:before:w-full  before:absolute before:bottom-0 before:w-[0%] before:h-[3px] before:bg-green  border-green  py-[31px] ">
            Shop
          </Link>
        </li>
        <li>
          <Link className="border-solid relative hover:before:w-full  before:absolute before:bottom-0 before:w-[0%] before:h-[3px] before:bg-green  border-green py-[31px] ">
            Plant Care
          </Link>
        </li>
        <li>
          <Link className="border-solid relative hover:before:w-full  before:absolute before:bottom-0 before:w-[0%] before:h-[3px] before:bg-green  border-green  py-[31px] ">
            Blogs
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-[30px]">
        <CiSearch className="text-[24px]" />
        <CiShoppingCart className="text-[24px]" />
        <Button>
          <CiLogin className="text-[20px]" />Log in
        </Button>
      </div>
    </nav>
  );
};
