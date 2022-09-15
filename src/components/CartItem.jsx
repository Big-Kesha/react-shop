function CartItem(props) {
  const { mainId, displayName, itemPrice, quantity, deleteItem = Function.prototype, manageItemQuantity = Function.prototype } = props;

  return (
    <li className="collection-item">
      {displayName} {itemPrice}{" "}
      <i className="material-icons manage-quantity" onClick={() => manageItemQuantity(mainId, 1)}>
        add
      </i>{" "}
      x {quantity}{" "}
      <i className="material-icons manage-quantity" onClick={() => manageItemQuantity(mainId, -1)}>
        remove
      </i>{" "}
      = {+itemPrice * quantity} руб.
      <i className="material-icons delete-item" onClick={() => deleteItem(mainId)}>
        close
      </i>
    </li>
  );
}

export { CartItem };
