import Breadcrumb from "../common/Breadcrumb";
import { Link } from "react-router-dom";
import Confirm from "../common/Confirm";

const CartView = () => {
  return (
    <>
      <Breadcrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        <div>
          <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
          <Link to="/" className="btn btn-primary mt-10">
            담으러 가기
          </Link>
        </div>
      </div>
      <div className="lg:flex justify-between mb-20">
        <div></div>
        <div className="self-start shrink-0 flex items-center mt-10 mb-20">
          <span className="text-xl md:text-2xl">총: 가격</span>
          <label
            htmlFor="confirm-modal"
            className="modal-button btn btn-primary ml-5"
          >
            구매하기
          </label>
        </div>
      </div>

      <Confirm />
    </>
  );
};

export default CartView;
