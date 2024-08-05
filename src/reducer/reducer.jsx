export const initialState = [];

function cartItemReducer(state, action) {
  switch (action.type) {
    case "add_item": {
      return [
        ...state,
        { id: action.product.id, product: action.product, value: 1 },
      ];
    }
    case "increase_qty": {
      return state.map((item) =>
        item.id === action.product.id
          ? { ...item, value: item.value + 1 }
          : item
      );
    }

    case "reduce_qty": {
      return state.map((item) =>
        item.id === action.product.id
          ? item.value > 1
            ? { ...item, value: item.value - 1 }
            : item
          : item
      );
    }

    case "remove_item": {
      return state.filter((item) => item.id !== action.product.id);
    }

    case "empty_cart": {
      return state.splice(0, action.cartItems.length);
    }

    default:
      return state;
  }
}

export default cartItemReducer;