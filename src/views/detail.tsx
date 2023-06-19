import { useRecoilValue, useSetRecoilState } from "recoil";
import { Product, productsListState } from "../Store/Products";
import { cartState } from "../Store/cart";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  //장바구니를 저장할때 useSetRecoilState
  //장바구니 목록을 불러올때는 useRecoilValue
  // const getCartList = useRecoilValue<Product[]>(cartState);
  const setCartList = useSetRecoilState<Product[]>(cartState);
  const productsList = useRecoilValue(productsListState);
  const { id } = useParams();

  const [product, setProudct] = useState<Product | null>(null);

  const addCart = () => {
    if (product) {
      setCartList((old) => {
        const newList = [...old, product];
        localStorage.setItem("cart", JSON.stringify(newList));
        return newList;
      });
      // 값 저장
    }
  };

  useEffect(() => {
    const findProduct = productsList.find(
      (product) => product.id == Number(id)
    );
    if (findProduct == null) {
      // 오류처리
      //router.push
      return;
    }
    setProudct(findProduct);
  }, []);

  return product ? (
    <div className="w-full">
      <img src={product.image} />
      {product.title}
      <button onClick={addCart}>장바구니 담기</button>
    </div>
  ) : null;
};

export default Index;
