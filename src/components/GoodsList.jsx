import { GoodsItem } from "./GoodsItem.jsx";

function GoodsList(props) {
  const { goods = [], addGoods = Function.prototype } = props;

  return (
    <div className="goods">
      {goods.length ? goods.map((item) => <GoodsItem key={item.mainId} addGoods={addGoods} {...item} />) : "No shopping today"}
    </div>
  );
}

export { GoodsList };
