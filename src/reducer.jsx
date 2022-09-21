export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case "DELETE_ITEM":
      return {
        ...state,
        order: state.order.filter((item) => item.mainId !== payload.id),
      };
    case "MANAGE_QUANTITY":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.mainId !== payload.id) {
            return item;
          } else if (item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity + payload.step,
            };
          } else if (payload.step < 0) {
            return item;
          } else {
            return {
              ...item,
              quantity: item.quantity + payload.step,
            };
          }
        }),
      };
    case "TOGGLE_CART":
      return {
        ...state,
        isCartVisible: !state.isCartVisible,
      };
    case "ADD_GOODS": {
      const itemIndex = state.order.findIndex((orderItem) => orderItem.mainId === payload.mainId);
      let newOrder = [];

      if (itemIndex === -1) {
        const newItem = {
          ...payload,
          quantity: 1,
        };

        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      };
    }

    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };

    default:
      return state;
  }
}
