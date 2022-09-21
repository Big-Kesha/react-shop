import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isCartVisible: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  value.deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: { id: id } });
  };

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  value.addGoods = (item) => {
    dispatch({ type: "ADD_GOODS", payload: item });
  };

  value.manageQuantity = (itemId, step) => {
    dispatch({ type: "MANAGE_QUANTITY", payload: { id: itemId, step: step } });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
