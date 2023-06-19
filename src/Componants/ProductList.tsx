import { Product } from "../Store/Products";
import ProductCard from "./ProductCard";

const ProductList = (props: { data: Product[] }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
      {props.data.map((data, index) => {
        return <ProductCard data={data} key={index} />;
      })}
    </div>
  );
};

export default ProductList;
