import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/context";
import style from "./Header.module.css";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import leader from "../../assets/leader-big.png";
import leaderSm from "../../assets/leader-small.png";
import { Link } from "react-router-dom";

export const Header = () => {

  const { order = [] } = useContext(ShopContext);
  const [width, setWidth] = useState(window.innerWidth);
  const breackpoint = 510;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    }
  }, []);

  if (width > breackpoint) {
    return (
      <div className={style.header}>
        <div className={style.headerTitle}>
          <img src={leader} alt="Leader" />
        </div>
        {order.length
          ? <Link to="/cart">
            <div className={style.headerCart}>
              <div className={style.cartWrapper}>
                <Cart className={style.cart} />
                <p>Корзина</p>
              </div>
              {order.length ? <span>{order.length}</span> : null}
            </div>
          </Link>
          : <div className={style.headerCart}>
            <div className={style.cartWrapper}>
              <Cart className={style.cart} />
              <p>Корзина</p>
            </div>
            {order.length ? <span>{order.length}</span> : null}
          </div>
        }
      </div>
    )
  }
  return (
    <div className={style.header}>
      <div className={style.headerTitle}>
        <img src={leaderSm} alt="Leader" />
      </div>
      {order.length
        ? <Link to="/cart">
          <div className={style.headerCart}>
            <div className={style.cartWrapper}>
              <Cart className={style.cart} />
            </div>
            {order.length ? <span>{order.length}</span> : null}
          </div>
        </Link>
        : <div className={style.headerCart}>
          <div className={style.cartWrapper}>
            <Cart className={style.cart} />
          </div>
          {order.length ? <span>{order.length}</span> : null}
        </div>
      }
    </div>
  )
}
