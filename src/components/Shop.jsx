import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config.js";
import { GoodsList } from "./GoodsList.jsx";
import { Loader } from "./Loader.jsx";
import { Cart } from "./Cart.jsx";
import { CartList } from "./CartList.jsx";
import { Alert } from "./Alert.jsx";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);
  const [alertName, setAlertName] = useState("");

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop.filter((entry) => entry.mainType !== "bundle"));
        setLoading(false);
      });
  }, []);

  function addGoods(item) {
    const itemIndex = order.findIndex((orderItem) => orderItem.mainId === item.mainId);

    if (itemIndex === -1) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  }

  function toggleCart() {
    setCartVisible(!isCartVisible);
  }

  function deleteItem(id) {
    setOrder(order.filter((item) => item.mainId !== id));
  }

  function manageItemQuantity(itemId, step) {
    const newOrder = order.map((item) => {
      if (item.mainId !== itemId) {
        return item;
      } else if (item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity + step,
        };
      } else if (step < 0) {
        return item;
      } else {
        return {
          ...item,
          quantity: item.quantity + step,
        };
      }
    });
    setOrder(newOrder);
  }

  function closeAlert() {
    setAlertName("");
  }

  return (
    <div className="container content">
      {isCartVisible && <CartList order={order} toggleCart={toggleCart} deleteItem={deleteItem} manageItemQuantity={manageItemQuantity} />}

      <Cart quantity={order.length} toggleCart={toggleCart} />

      {loading ? <Loader /> : <GoodsList goods={goods} addGoods={addGoods} />}

      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </div>
  );
}

export { Shop };
