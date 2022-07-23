import { useContext } from "react";
import { ShopContext } from "../../context/context";
import { CartItem } from "../CartItem/CartItem";
import style from "./style.module.css";

export const Cart = () => {
  const { order } = useContext(ShopContext);
  console.log(order)
  const totalPrice = order.reduce((sum, element) => {
    return sum + element.price * element.cartCount;
  }, 0);

  return (
    <>
      <h2 className={style.cartTitle}>Корзина</h2>
      {order.length > 0 && order.map(item => <CartItem key={item.id} {...item} />)}
      <h3 className={style.total}>Сумма {totalPrice} ₽</h3>
    </>
  )
}
