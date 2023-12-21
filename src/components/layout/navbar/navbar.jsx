import React from "react";
import { CiShoppingCart, CiSearch, CiLogin } from "react-icons/ci";

import logo from "/images/Logo.svg";
import { Button } from "../../common";
import { Link, useLocation, useParams } from "react-router-dom";
export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="flex items-center justify-between  border-b-[0.3px] border-green border-opacity-50">
      <Link to={"/"}><img src={logo} alt="Logo" /></Link>
      <ul className="text-neutral-700 text-base  flex items-center gap-[50px] py-[27px]">
        <li>
          <Link
            to={"/"}
            className={`border-solid transition-all relative hover:before:w-full hover:font-bold   before:absolute before:bottom-0 before:w-[0%] before:h-[3px] before:bg-green  border-green  py-[31px] ${
              pathname === "/" ? "before:w-full font-bold " : ""
            } `}>
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link
            to={"/shop"}
            className={`border-solid transition-all relative hover:before:w-full hover:font-bold   before:absolute before:bottom-0 before:w-[0%] before:h-[3px] before:bg-green  border-green  py-[31px] ${
              pathname === "/shop" ? "before:w-full font-bold " : ""
            } `}>
            Shop
          </Link>
        </li>
        <li>
          <Link className="border-solid relative hover:before:w-full hover:font-bold  before:absolute before:bottom-0 before:w-[0%] before:h-[3px] before:bg-green  border-green py-[31px] ">
            Plant Care
          </Link>
        </li>
        <li>
          <Link className="border-solid relative hover:before:w-full hover:font-bold before:absolute before:bottom-0 before:w-[0%] before:h-[3px] before:bg-green  border-green  py-[31px] ">
            Blogs
          </Link>
        </li>
      </ul>
      <div className="flex items-center  gap-[30px]">
        <div className="flex items-center relative gap-[30px]">
          <CiSearch className="text-[24px]" />
          <Link to={"shopping-cart"}><CiShoppingCart  className="text-[28px]" /></Link>
          <span className="absolute text-[10px] bg-green w-[13px] h-[13px] flex items-center justify-center rounded-full border-solid border-[1px] border-white text-white top-[3px] right-[0] ">
            6
          </span>
        </div>
        <Button>
          <CiLogin className="text-[20px]" />
          Log in
        </Button> 
      </div>
    </nav>
  );
};
