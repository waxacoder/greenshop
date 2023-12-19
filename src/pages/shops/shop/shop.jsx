import React from "react";
import { ProductInfo } from "./productinfo";
import { Description } from "./description";
import { Products } from "./products";

export const Shop = () => {
  return (
    <div>
      <ProductInfo />
      <Description/>
      <Products/>
    </div>
  );
};
