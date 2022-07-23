export function reducer(state, action) {
  switch (action.type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: action.payload || []
      }
    case "ADD_TO_BASKET": {
      let itemIndex = state.order.findIndex(oderItem => oderItem.id === action.payload.id);
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...action.payload,
          cartCount: 1,
        }
        newOrder = [...state.order, newItem]
      } 
      return {
        ...state,
        order: newOrder,
      }
    }
    // case "REMOVE_FROM_BASKET":
    //   return {
    //     ...state,
    //     order: state.order.filter(item => item.id !== action.payload.id)
    //   }
   
    // case "SET_INCREMENT_ORDER": {
    //   let newOrder = state.order.map(item => {
    //     if (item.id === action.payload.id) {
    //       let newCartCount = item.cartCount + 1;
    //       return {
    //         ...item,
    //         cartCount: newCartCount
    //       }
    //     } else {
    //       return item;
    //     }
    //   });
    //   return {
    //     ...state,
    //     order: newOrder,
    //   }
    // }
    // case "SET_DECREMENT_ORDER": {
    //   let newOrder = state.order.map(item => {
    //     if (item.id === action.payload.id) {
    //       let newCartCount = item.cartCount - 1;
    //       return {
    //         ...item,
    //         cartCount: newCartCount
    //       }
    //     } else {
    //       return item;
    //     }
    //   });
    //   return {
    //     ...state,
    //     order: newOrder
    //   }
    // }
    default:
      return state;
  }
}