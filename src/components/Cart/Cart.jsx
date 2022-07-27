import { useContext } from "react";
import { ShopContext } from "../../context/context";
import { CartItem } from "../CartItem/CartItem";
import { Form } from "../Form/Form";
import style from "./Cart.module.css";

export const Cart = () => {
  const { order } = useContext(ShopContext);
  const totalPrice = order.reduce((sum, element) => {
    return sum + element.price * element.cartCount;
  }, 0);

  return (
    <>
      <div className="container">
        <h2 className={style.title}>Корзина</h2>
        {order.length > 0 && order.map(item => <CartItem key={item.id} {...item} totalPrice={totalPrice} />)}
        {totalPrice > 0 && <h3 className={style.total}>Сумма {totalPrice} ₽</h3>}
      </div>
      <Form />
    </>

  )
}
