import { useContext } from "react";
import { ShopContext } from "../context";

function CartItem(props) {
  const { mainId, displayName, itemPrice, quantity } = props;

  const { deleteItem, manageQuantity } = useContext(ShopContext);

  return (
    <li className="collection-item">
      {displayName} {itemPrice}{" "}
      <i className="material-icons manage-quantity" onClick={() => manageQuantity(mainId, 1)}>
        add
      </i>{" "}
      x {quantity}{" "}
      <i className="material-icons manage-quantity" onClick={() => manageQuantity(mainId, -1)}>
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
