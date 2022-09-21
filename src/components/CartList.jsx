import { useContext } from "react";
import { ShopContext } from "../context";
import { CartItem } from "./CartItem";

function CartList() {
  const { order = [], toggleCart } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => sum + el.itemPrice * el.quantity, 0);

  return (
    <ul className="collection cart-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? order.map((item) => <CartItem key={item.mainId} {...item} />) : <li className="collection-item">Корзина пуста</li>}
      <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
      <li className="collection-item ">
        <button className="btn-small">Оформить</button>{" "}
      </li>
      <i className="material-icons cart-close" onClick={toggleCart}>
        close
      </i>
    </ul>
  );
}

export { CartList };
