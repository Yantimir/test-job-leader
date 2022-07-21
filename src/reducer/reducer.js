export function reducer(state, action) {
  switch (action.type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: action.payload || [],
        loading: false
      }
    // case "ADD_TO_BASKET": {
    //   let itemIndex = state.order.findIndex(oderItem => oderItem.id === action.payload.id);
    //   let newOrder = null;
    //   if (itemIndex < 0) {
    //     const newItem = {
    //       ...action.payload,
    //       cartCount: 1,
    //     }
    //     newOrder = [...state.order, newItem]
    //   } else {
    //     newOrder = state.order.map((orderItem, index) => {
    //       if (index === itemIndex) {
    //         return {
    //           ...orderItem,
    //           cartCount: orderItem.cartCount + 1,
    //         }
    //       } else {
    //         return orderItem;
    //       }
    //     });
    //   }
    //   return {
    //     ...state,
    //     order: newOrder,
    //   }
    // }
    // case "REMOVE_FROM_BASKET":
    //   return {
    //     ...state,
    //     order: state.order.filter(item => item.id !== action.payload.id)
    //   }
    // case "ADD_TO_FAVORITE": {
    //   let like = state.favoritesCards.some(favoritesItem => favoritesItem.like === action.payload.id);
    //   let newFavoritesCards = null;
    //   if (!like) {
    //     const newItem = {
    //       ...action.payload,
    //       like: action.payload.id
    //     }
    //     newFavoritesCards = [...state.favoritesCards, newItem]
    //   } else {
    //     newFavoritesCards = state.favoritesCards.filter(prev => prev.like !== action.payload.id);
    //   }
    //   return {
    //     ...state,
    //     favoritesCards: newFavoritesCards
    //   }
    // }
    // case "REMOVE_FROM_FAVORITE":
    //   return {
    //     ...state,
    //     favoritesCards: state.favoritesCards.filter((item) => item.like !== action.payload.id)
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