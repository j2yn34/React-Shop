import { useRecoilValue } from "recoil";
import ProductList from "../Componants/ProductList";
// import ProductCard from "../Componants/ProductCard";
import { fashionListState } from "../Store/Products";

const Index = () => {
  const fashionList = useRecoilValue(fashionListState);

  return (
    <article className="flex  flex-col w-full">
      <h1 className="text-center text-[3rem] mt-[3rem]">패션</h1>
      <div className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container w-full mx-auto">
        <ProductList data={fashionList} />
      </div>
    </article>
  );
};

export default Index;
