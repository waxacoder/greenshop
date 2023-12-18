import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
export const OurBlog = () => {
  const img1 = "https://i.ibb.co/ZdMpf0H/01.png";
  const img2 = "https://i.ibb.co/MgHgt2d/02.png";
  const img3 = "https://i.ibb.co/FHwVZvy/03.png ";
  const img4 = "https://i.ibb.co/QYzs7qv/04.png";
  return (
    <div className="mb-[100px]">
      <h2 className="text-center text-black text-3xl font-bold leading-none">
        Our Blog Posts
      </h2>
      <p className=" text-center text-neutral-500 text-sm  leading-normal mt-[15px] mb-[35px]">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.{" "}
      </p>

      <div className="flex justify-between">
        <div className="bg-grey w-[268px] px-[15px] pb-[13px]">
          <img src={img1} alt="flower 1" />
          <p className="text-green-500 text-sm font-medium leading-none mt-[9px]">
            September 12 I Read in 6 minutes
          </p>
          <h3 className="text-black text-xl font-bold leading-relaxed mt-1">
            Cactus & Succulent <br />
            Care Tips
          </h3>
          <p className="w-[242px] h-11 text-neutral-500 text-sm leading-snug mb-[12px] mt-1">
            Cacti are succulents are easy care plants for any home or patio.{" "}
          </p>
          <div>
            <Link className="flex items-center gap-[2px]">
              <p>Read More</p>
              <GoArrowRight />
            </Link>
          </div>
        </div>

        <div className="bg-grey w-[268px] px-[15px] pb-[13px]">
          <img src={img2} alt="flower 2" />
          <p className="text-green-500 text-sm font-medium leading-none mt-[9px]">
            September 12 I Read in 6 minutes
          </p>
          <h3 className="text-black text-xl font-bold leading-relaxed mt-1">
            Top 10 Succulents for <br />
            Your Home
          </h3>
          <p className="w-[242px] h-11 text-neutral-500 text-sm leading-snug mb-[12px] mt-1">
            Best in hanging baskets. Prefers medium to high light.
          </p>
          <div>
            <Link className="flex items-center gap-[2px]">
              <p>Read More</p>
              <GoArrowRight />
            </Link>
          </div>
        </div>

        <div className="bg-grey w-[268px] px-[15px] pb-[13px]">
          <img src={img3} alt="flower 3" />
          <p className="text-green-500 text-sm font-medium leading-none mt-[9px]">
            September 12 I Read in 6 minutes
          </p>
          <h3 className="text-black text-xl font-bold leading-relaxed mt-1">
            Cacti & Succulent <br />
            Care Tips
          </h3>
          <p className="w-[242px] h-11 text-neutral-500 text-sm leading-snug mb-[12px] mt-1">
            Cacti and succulents thrive in containers and because most are..
          </p>
          <div>
            <Link className="flex items-center gap-[2px]">
              <p>Read More</p>
              <GoArrowRight />
            </Link>
          </div>
        </div>

        <div className="bg-grey w-[268px] px-[15px] pb-[13px]">
          <img src={img4} alt="flower 4" />
          <p className="text-green-500 text-sm font-medium leading-none mt-[9px]">
            September 12 I Read in 6 minutes
          </p>
          <h3 className="text-black text-xl font-bold leading-relaxed mt-1">
            Best Houseplants <br />
            Room by Room
          </h3>
          <p className="w-[242px] h-11 text-neutral-500 text-sm leading-snug mb-[12px] mt-1">
            The benefits of houseplants are endless. In addition to..
          </p>
          <div>
            <Link className="flex items-center gap-[2px]">
              <p>Read More</p>
              <GoArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
