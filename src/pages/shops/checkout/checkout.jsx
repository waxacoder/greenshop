import { Link } from "react-router-dom";
import { Button, Input } from "../../../components/common";
import payment from "/images/payment.png";
export const Checkout = () => {
  const img1 = "https://i.ibb.co/9GGfXX7/product-20-320x320-1.png";
  const img2 = "https://i.ibb.co/Y3BMNXm/image-7.png";
  const img3 = "https://i.ibb.co/RhWF32b/image-8.png";

  return (
    <div className="mb-[210px]">
      <h4 className="text-black text-[15px] mt-[36px]">
        <span className=" font-bold">Home</span>
        <span> / Shop / Shopping Cart </span>
      </h4>
      <div className="flex mt-[36px] justify-between">
        <div>
          <div>
            <h4 className="text-black text-[17px] font-bold">
              Billing Address
            </h4>
          </div>

          <div>
            <div>
              <div className="flex gap-[22px] mb-[30px] mt-[21px]">
                <Input labelName="First Name" kind="text" placeholder="" />
                <Input labelName="Last Name" kind="text" placeholder=""></Input>
              </div>
              <div className="flex gap-[22px] mb-[30px] ">
                <Input
                  labelName="Country / Region"
                  kind="text"
                  placeholder="Select a country / region"
                />
                <Input
                  labelName="Town / City"
                  kind="text"
                  placeholder=""></Input>
              </div>
              <div className="flex gap-[22px] mb-[30px] ">
                <Input
                  labelName="Street Address"
                  kind="text"
                  placeholder="House number and street name"
                />
                <Input
                  labelName=""
                  kind="text"
                  placeholder="Appartment, suite, unit, etc. (optional)"></Input>
              </div>
              <div className="flex gap-[22px] mb-[30px] ">
                <Input
                  labelName="State"
                  kind="text"
                  placeholder="Select a state"
                />
                <Input labelName="Zip" kind="file" placeholder=""></Input>
              </div>
              <div className="flex gap-[22px] mb-[30px] ">
                <Input labelName="Email address" kind="email" placeholder="" />
                <Input labelName="Phone Number" kind="tel" placeholder="+998" />
              </div>

              <div className="flex items-center gap-[7px]">
                <input type="radio" name="" id="address" />
                <label
                  htmlFor="address"
                  className="text-neutral-700 text-[15px] font-medium ">
                  Ship to a different address?
                </label>
              </div>

              <div>
                <p className="text-black text-[15px] mt-[54px]">
                  Order notes (optional)
                </p>
                <textarea className="w-[350px] h-[152px] rounded-[3px] border border-gray-200 mt-[10px]"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-neutral-700 text-[17px] font-bold ">
            Your Order
          </h4>
          <div className="text-black text-base font-medium flex  gap-[258px]">
            <p>Products</p>
            <p>Subtotal</p>
          </div>
          <hr className=" border-[0.3px] border-green border-opacity-50 my-[11px]" />
          <div>
            <div className="flex items-center justify-between mb-[15px] bg-grey">
              <img src={img1} alt="image" className="w-[70px] h-[70px]" />
              <div>
                <p className="text-neutral-700 text-base font-medium">
                  Barberton Daisy
                </p>
                <p className="text-[#717171]  text-sm ">
                  <span className="text-[#A4A4A4]">SKU: </span>1995751877966
                </p>
              </div>
              <p className="text-neutral-500 text-sm ">(x 2)</p>
              <h4 className="text-right text-green text-lg font-bold ">
                $238.00
              </h4>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-[15px] bg-grey">
              <img src={img2} alt="image" className="w-[70px] h-[70px]" />
              <div>
                <p className="text-neutral-700 text-base font-medium">
                  Blushing Bromeliad
                </p>
                <p className="text-[#717171]  text-sm ">
                  <span className="text-[#A4A4A4]">SKU: </span>19957518757065
                </p>
              </div>
              <p className="text-neutral-500 text-sm ">(x 6)</p>
              <h4 className="text-right text-green text-lg font-bold ">
                $834.00
              </h4>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-[15px] bg-grey">
              <img src={img3} alt="image" className="w-[70px] h-[70px]" />
              <div>
                <p className="text-neutral-700 text-base font-medium">
                  Aluminum Plant
                </p>
                <p className="text-[#717171]  text-sm ">
                  <span className="text-[#A4A4A4]">SKU: </span>1995751877786
                </p>
              </div>
              <p className="text-neutral-500 text-sm ">(x 9)</p>
              <h4 className="text-right text-green text-lg font-bold ">
                $1,611.00
              </h4>
            </div>
          </div>

          <p className="text-right text-sm text-black">
            Have a coupon code?
            <Link className="text-green font-medium"> Click here</Link>
          </p>

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

          <hr className=" border-[0.3px] border-green border-opacity-50 my-[17px]" />

          <div className="flex items-center justify-between mb-[47px]">
            <h4 className="text-black text-base font-bold">Total</h4>
            <h4 className="text-green text-lg font-bold ">$2,699.00</h4>
          </div>

          <h4 className="text-neutral-700 text-[17px] font-bold">
            Payment Method
          </h4>

          <div className="flex flex-col gap-[15px] mt-[20px] mb-[50px]">
            <div className="border border-gray-200 py-[10px] px-[11px] rounded-[3px]">
              <div className="flex gap-[10px]">
                <input type="radio" />
                <img src={payment} alt="payment" className="w-56 h-[26px]" />
              </div>
            </div>

            <div className="border border-gray-200 py-[10px] px-[11px] rounded-[3px]">
              <div className="flex gap-[10px]">
                <input type="radio" />
                <p className="text-black text-[15px]">Dorect bank transfer</p>
              </div>
            </div>

            <div className="border border-green py-[10px] px-[11px] rounded-[3px]">
              <div className="flex gap-[10px]">
                <input type="radio" />
                <p className="text-black text-[15px]">Cash on delivery</p>
              </div>
            </div>
          </div>

          <Button>
            <span className="font-bold px-[136px]">Place Order</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
