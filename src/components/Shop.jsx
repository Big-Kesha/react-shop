import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

import { API_KEY, API_URL } from "../config.js";
import { GoodsList } from "./GoodsList.jsx";
import { Loader } from "./Loader.jsx";
import { Cart } from "./Cart.jsx";
import { CartList } from "./CartList.jsx";
import { Alert } from "./Alert.jsx";

function Shop() {
  const { setGoods, loading, order, isCartVisible, alertName } = useContext(ShopContext);

  useEffect(
    function getGoods() {
      fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setGoods(data.shop.filter((entry) => entry.mainType !== "bundle"));
        });
    },
    [setGoods]
  );

  return (
    <div className="container content">
      {isCartVisible && <CartList />}

      <Cart quantity={order.length} />

      {loading ? <Loader /> : <GoodsList />}

      {alertName && <Alert />}
    </div>
  );
}

export { Shop };
