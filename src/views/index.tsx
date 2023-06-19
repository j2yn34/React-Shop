import { useRecoilValue } from "recoil";
import Carousel from "../Componants/common/Slider";
import ProductList from "../Componants/products/ProductList";
import { productsListState } from "../store/products";
import { AccessoryListState } from "../store/products";
import { digitalListState } from "../store/products";

const Index = () => {
  const productsList = useRecoilValue(productsListState);
  const accessoryList = useRecoilValue(AccessoryListState);
  const digitalList = useRecoilValue(digitalListState);

  return (
    <div>
      <Carousel />
      <article className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          패션
        </h2>
        <ProductList data={productsList.slice(0, 4)} />
      </article>
      <article className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          액세서리
        </h2>
        <ProductList data={accessoryList.slice(0, 4)} />
      </article>
      <article className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          디지털
        </h2>
        <ProductList data={digitalList.slice(0, 4)} />
      </article>
    </div>
  );
};

export default Index;
