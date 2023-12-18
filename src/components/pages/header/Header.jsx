import { Button } from "../../common";
export const Header = () => {
  const flower = "https://i.ibb.co/SBQ3Skk/Group-36211.png";
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-neutral-700 text-sm font-medium  uppercase leading-none tracking-wider mb-[7px]">
          Welcome to GreenShop
        </p>
        <h1 className="text-neutral-700 font-bold text-[70px] font-['Cera Pro'] uppercase leading-[70px] mb-[5px]">
          Let's Make a <br />
          Better <span className="text-green">Planet</span>
        </h1>
        <p className="text-neutral-500 text-sm mb-[44px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use <br /> our plants to create an unique Urban Jungle. Order
          your favorite plants!
        </p>
        <Button><span className="px-[10px]">SHOP NOW</span></Button>
      </div>
      <div className="">
        <img className="" src={flower} alt="Flower" />
      </div>
    </div>
  );
};
