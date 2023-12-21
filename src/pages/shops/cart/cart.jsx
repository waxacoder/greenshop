import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";
import { Button } from "../../../components/common";
import { Link } from "react-router-dom";
import { Description } from "../shop/description";
import { Products } from "../shop/products";
export const Cart = () => {
  const img1 = "https://i.ibb.co/9GGfXX7/product-20-320x320-1.png";
  const img2 = "https://i.ibb.co/Y3BMNXm/image-7.png";
  const img3 = "https://i.ibb.co/RhWF32b/image-8.png";
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div>
      <div>
        <h4 className="text-black text-[15px] mt-[36px]">
          <span className=" font-bold">Home</span>
          <span> / Shop / Shopping Cart </span>
        </h4>

        <div className="flex justify-between mt-[40px] mb-[80px]">
          <div>
            <table>
              <tr className="text-neutral-700 text-base font-medium  pr-[23px] pb-[20px] ">
                <td className="pr-[245px]">Products</td>
                <td className="pr-[108px]">Price</td>
                <td className="pr-[97px]">Quantity</td>
                <td className="pr-[74px]">Total</td>
                <td className="pr-[35px]"></td>
                <td></td>
              </tr>

              <tr>
                <td>
                  <div className="h-[12px] bg-white w-[100%}"></div>
                </td>
              </tr>

              <tr className=" border-t border-green border-opacity-50">
                <td>
                  <div className="h-[13px] bg-white w-[100%}"></div>
                </td>
              </tr>

              <tr className="bg-grey py-[17px]  pr-[10px] border-b-[15px] border-white ">
                <td className="">
                  <div className="flex items-center">
                    <div>
                      <img
                        src={img1}
                        alt=" flower 1"
                        className="w-[70px] h-[70px] mix-blend-multiply"
                      />
                    </div>

                    <div className="pl-[14px]">
                      <h4 className="text-black text-base font-medium">
                        Barberton Daisy
                      </h4>
                      <p className="text-neutral-500 text-sm ">
                        <span className="text-neutral-400">SKU: </span>
                        1995751877966
                      </p>
                    </div>
                  </div>
                </td>

                <td className="text-neutral-500 text-base font-medium">
                  $119.00
                </td>
                <td>
                  <div className="flex gap-[14px] items-center ">
                    <div>
                      <button
                        onClick={decrement}
                        className="w-[20px] h-[20px] bg-green flex items-center justify-center rounded-full">
                        <FaMinus className="text-white" />
                      </button>
                    </div>
                    <span className="w-3 h-3 flex items-center justify-center">
                      {count}
                    </span>
                    <div>
                      <button
                        className="w-[20px] h-[20px] bg-green flex items-center justify-center rounded-full"
                        onClick={increment}>
                        <FaPlus className="text-white" />
                      </button>
                    </div>
                  </div>
                </td>

                <td className="text-green text-base font-bold">$238.00</td>
                <td>
                  <FiTrash className="text-[#727272]" />
                </td>
              </tr>
              <tr className="bg-grey py-[17px]  pr-[10px] border-b-[15px] border-white">
                <td className="">
                  <div className="flex items-center">
                    <div>
                      <img
                        src={img2}
                        alt=" flower 2"
                        className="w-[70px] h-[70px] mix-blend-multiply"
                      />
                    </div>

                    <div className="pl-[14px]">
                      <h4 className="text-black text-base font-medium">
                        Blushing Bromeliad
                      </h4>
                      <p className="text-neutral-500 text-sm ">
                        <span className="text-neutral-400">SKU: </span>
                        19957518757065
                      </p>
                    </div>
                  </div>
                </td>

                <td className="text-neutral-500 text-base font-medium">
                  $139.00
                </td>
                <td>
                  <div className="flex gap-[14px] items-center ">
                    <div>
                      <button
                        onClick={decrement}
                        className="w-[20px] h-[20px] bg-green flex items-center justify-center rounded-full">
                        <FaMinus className="text-white" />
                      </button>
                    </div>
                    <span className="w-3 h-3 flex items-center justify-center">
                      {count}
                    </span>
                    <div>
                      <button
                        className="w-[20px] h-[20px] bg-green flex items-center justify-center rounded-full"
                        onClick={increment}>
                        <FaPlus className="text-white" />
                      </button>
                    </div>
                  </div>
                </td>

                <td className="text-green text-base font-bold">$834.00</td>
                <td>
                  <FiTrash className="text-[#727272]" />
                </td>
              </tr>

              <tr className="bg-grey py-[17px]  pr-[10px] ">
                <td className="">
                  <div className="flex items-center">
                    <div>
                      <img
                        src={img3}
                        alt=" flower 3"
                        className="w-[70px] h-[70px] mix-blend-multiply"
                      />
                    </div>

                    <div className="pl-[14px]">
                      <h4 className="text-black text-base font-medium">
                        Aluminum Plant
                      </h4>
                      <p className="text-neutral-500 text-sm ">
                        <span className="text-neutral-400">SKU: </span>
                        19957518777865
                      </p>
                    </div>
                  </div>
                </td>

                <td className="text-neutral-500 text-base font-medium">
                  $179.00
                </td>
                <td>
                  <div className="flex gap-[14px] items-center ">
                    <div>
                      <button
                        onClick={decrement}
                        className="w-[20px] h-[20px] bg-green flex items-center justify-center rounded-full">
                        <FaMinus className="text-white" />
                      </button>
                    </div>
                    <span className="w-3 h-3 flex items-center justify-center">
                      {count}
                    </span>
                    <div>
                      <button
                        className="w-[20px] h-[20px] bg-green flex items-center justify-center rounded-full"
                        onClick={increment}>
                        <FaPlus className="text-white" />
                      </button>
                    </div>
                  </div>
                </td>

                <td className="text-green text-base font-bold">$1,611.00</td>
                <td>
                  <FiTrash className="text-[#727272]" />
                </td>
              </tr>
            </table>
            <div></div>
          </div>

          <div>
            <h4 className="text-black text-lg font-bold">Cart Totals</h4>
            <hr className="border-[0.3px] border-green border-opacity-50 my-[11px]" />
            <p className="text-sm text-black mb-[8px]">Coupon Apply</p>
            <div className="flex items-center mb-[17px] border-[1px] border-green rounded-[9px]">
              <input
                className=" rounded-tl-[10px] rounded-bl-[10px]  shadow py-[12px] pl-[12px] w-[270px] bg-white"
                type="email"
                placeholder="enter your email address..."
              />
              <div className="bg-green w-[95px] h-[48px] flex items-center justify-center rounded-tr-md rounded-br-md">
                <Button>
                  <span className="font-bold ml-[10px]">Apply</span>
                </Button>
              </div>
            </div>

            <div className="text-black flex justify-between mt-[30px] mb-[15px]">
              <p className=" text-[15px]">Subtotal</p>
              <p className=" text-lg font-medium">$2,683.00</p>
            </div>

            <div className="text-black text-[15px] flex justify-between mb-[15px]">
              <p>Coupon Discount</p>
              <p>(-) 00.00</p>
            </div>

            <div className="text-black flex justify-between">
              <p className=" text-[15px]">Shiping</p>
              <p className=" text-lg font-medium">$16.00</p>
            </div>

            <div className="flex justify-end mt-[8px]">
              <p className="text-green text-xs">View shipping charge</p>
            </div>

            <div className="flex justify-between mt-[26px]">
              <p className="text-black text-base font-bold">Total</p>
              <p className="text-lg font-bold text-green">$2,699.00</p>
            </div>

            <div className="mt-[29px]">
              <Link to={"/shop/checkout"}>
                <Button>
                  <span className="mx-[89px] my-[5px] text-[15px] font-bold ">
                    Proceed To Checkout
                  </span>
                </Button>
              </Link>
              <div className="flex justify-center mt-[14px]">
                <Link className="text-green text-[15px]">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 className="text-green text-[17px] font-bold border-b-[0.2px] border-green border-opacity-50 pb-[12px] mt-[127px]">
        Releted Products
      </h4>
      <Products />
    </div>
  );
};
