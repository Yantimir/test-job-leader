import { createContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";
export const ShopContext = createContext();

const initialState = {
  goods: [],
  order: [],
}

export const ContextProvider = ({ children }) => {

  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  }

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  }

  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  }

  // value.setIncrementOrder = (itemId) => {
  //   dispatch({ type: "SET_INCREMENT_ORDER", payload: { id: itemId } });
  // }

  // value.setDecrementOrder = (itemId) => {
  //   dispatch({ type: "SET_DECREMENT_ORDER", payload: { id: itemId } });
  // }
  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}