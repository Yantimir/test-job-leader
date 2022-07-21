import style from "./Header.module.css";
import cart from "../../assets/cart.png";
import leader from "../../assets/leader-big.png";
export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerTitle}>
        <img src={leader} alt="Leader" />
        {/* <h1>Лидер Поиска</h1> */}
      </div>
      <div className={style.headerCart}>
        <img src={cart} alt="Cart" />
        <p>Корзина</p>
        <span>0</span>
      </div>

    </div>
  )
}
