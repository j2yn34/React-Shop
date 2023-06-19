import { useRecoilValue } from "recoil";
import ProductList from "../Componants/products/ProductList";
import { AccessoryListState } from "../store/products";
import Breadcrumb from "../Componants/common/Breadcrumb";

const Index = () => {
  const accessoryList = useRecoilValue(AccessoryListState);

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <Breadcrumb category="홈" crumb="액세서리" />
      <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          액세서리
        </h2>
        <ProductList data={accessoryList} />
      </article>
    </section>
  );
};

export default Index;
