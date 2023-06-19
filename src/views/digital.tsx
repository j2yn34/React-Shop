import { useRecoilValue } from "recoil";

import ProductList from "../Componants/ProductList";
// import ProductCard from "../Componants/ProductCard";
import { digitalListState } from "../Store/Products";

const Index = () => {
  const digitalList = useRecoilValue(digitalListState);

  return (
    <article className="flex  flex-col w-full">
      <h1 className="text-center text-[3rem] mt-[3rem]">디지털</h1>
      <div className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container w-full mx-auto">
        <ProductList data={digitalList} />
      </div>
    </article>
  );
};

export default Index;
