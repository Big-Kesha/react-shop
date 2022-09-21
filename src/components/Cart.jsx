import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
  const { order, toggleCart } = useContext(ShopContext);

  const quantity = order.length;

  return (
    <div className="cart" onClick={toggleCart}>
      <i className="small material-icons">shopping_cart</i>
      {quantity ? quantity : null}
    </div>
  );
}

export { Cart };
