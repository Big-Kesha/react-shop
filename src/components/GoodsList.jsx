import { useContext } from "react";
import { ShopContext } from "../context.jsx";

import { GoodsItem } from "./GoodsItem.jsx";

function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  return <div className="goods">{goods.length ? goods.map((item) => <GoodsItem key={item.mainId} {...item} />) : "No shopping today"}</div>;
}

export { GoodsList };
