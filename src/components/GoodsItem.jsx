function GoodsItem(props) {
  const { mainId, displayName, displayDescription, displayAssets, price, addGoods = Function.prototype } = props;

  const itemPrice = price.finalPrice;
  return (
    <div className="goodsItem" id={mainId}>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={displayAssets[0].full_background} alt={displayName} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{displayName}</span>
          <p>{displayDescription}</p>
          <p>
            <span style={{ fontSize: "1.5rem" }}>{itemPrice} руб.</span>
            <button className="btn right" onClick={() => addGoods({ mainId, displayName, itemPrice })}>
              Купить
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export { GoodsItem };
