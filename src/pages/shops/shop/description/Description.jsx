import React from "react";
import { Link } from "react-router-dom";

export const Description = () => {
  return (
    <div>
      <ul className="flex items-center gap-[30px] border-b-[0.3px] border-green pb-[10px]">
        <li>
          <Link className="text-green text-[17px] font-bold pb-[12px] border-b-[3px] border-green">
            Product Description
          </Link>
        </li>
        <li>
          <Link className="text-black">
            Reviews <span>(19)</span>
          </Link>
        </li>
      </ul>

      <p className=" text-neutral-500 text-sm leading-6 mt-[18px]">
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your <br /> plants off the ground. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue
        nec est tristique auctor. Donec non est at libero vulputate rutrum.
        Morbi ornare lectus <br /> quis justo gravida semper. Nulla tellus mi,
        vulputate adipiscing cursus eu, suscipit id nulla.
        <br />
        <br />
        Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
        sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce
        ultricies massa massa. Fusce aliquam, <br /> purus eget sagittis
        vulputate, sapien libero hendrerit est, sed commodo augue nisi non
        neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        tempor, lorem et placerat <br /> vestibulum, metus nisi posuere nisl, in
        accumsan elit odio quis mi. Cras neque metus, consequat et blandit et,
        luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula
        euismod <br /> eget. The ceramic cylinder planters come with a wooden
        stand to help elevate your plants off the ground.{" "}
      </p>

      <h4 className="text-black text-sm font-bold mt-[18px]">Living Room:</h4>
      <p className=" text-neutral-500 text-sm leading-6">
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your <br /> plants off the ground. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <h4 className="text-black text-sm font-bold mt-[18px]">Dining Room:</h4>
      <p className=" text-neutral-500 text-sm leading-6">
        The benefits of houseplants are endless. In addition to cleaning the air
        of harmful toxins, they can help to improve your mood, reduce stress and
        provide you with better sleep. Fill every <br /> room of your home with
        houseplants and their restorative qualities will improve your life.
      </p>
      <h4 className="text-black text-sm font-bold mt-[18px]">Office:</h4>
      <p className=" text-neutral-500 text-sm leading-6">
        {" "}
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your <br /> plants off the ground. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <h4 className="text-green text-[17px] font-bold border-b-[0.2px] border-green border-opacity-50 pb-[12px] mt-[127px]">
        Releted Products
      </h4>
    </div>
  );
};
