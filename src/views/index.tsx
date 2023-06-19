import { useRecoilValue } from "recoil";

import Carousel from "../Componants/Common/Slider";
import ProductList from "../Componants/ProductList";
// import ProductCard from "../Componants/ProductCard";
import { productsListState } from "../Store/Products";
import { useRef } from "react";

const Index = () => {
  const productsList = useRecoilValue(productsListState);
  const $hamburgur = useRef<HTMLInputElement>(null);
  const overlay = () => {
    $hamburgur?.current?.click();
  };

  return (
    <div>
      <Carousel />
      <article className="flex  flex-col w-full">
        <h1 className="text-center text-[3rem] mt-[3rem]">패션</h1>
        <div className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container w-full mx-auto">
          <ProductList data={productsList.slice(0, 4)} />
        </div>
      </article>
      <article className="flex  flex-col w-full">
        <h1 className="text-center text-[3rem] mt-[3rem]">액세서리</h1>
        <div className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container w-full mx-auto">
          <ProductList data={productsList.slice(0, 4)} />
        </div>
      </article>
      <article className="flex  flex-col w-full">
        <h1 className="text-center text-[3rem] mt-[3rem]">디지털</h1>
        <div className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container w-full mx-auto">
          <ProductList data={productsList.slice(0, 4)} />
        </div>
      </article>
    </div>
  );
};

export default Index;
