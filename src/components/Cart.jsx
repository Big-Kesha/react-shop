function Cart(props) {
  const { quantity, toggleCart = Function.prototype } = props;
  return (
    <div className="cart" onClick={toggleCart}>
      <i className="small material-icons">shopping_cart</i>
      {quantity ? quantity : null}
    </div>
  );
}

export { Cart };
