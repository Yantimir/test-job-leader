import { useContext, useEffect, useState } from "react";
import style from "./CartItem.module.css";
import { Icon24MinusOutline } from '@vkontakte/icons';
import { Icon24Add } from '@vkontakte/icons';
import { Icon20Cancel } from '@vkontakte/icons';
import { ShopContext } from "../../context/context";

export const CartItem = ({ id, img, name, price, cartCount, totalPrice }) => {

  const [width, setWidth] = useState(window.innerWidth);
  const breackpoint = 690;
  const { removeFromBasket, setIncrementOrder, setDecrementOrder } = useContext(ShopContext);
  
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    }
  }, []);

  // if (totalPrice === 0) return <Navigate to="/" replace={true} />

  if (width > breackpoint) {
    return (
      <div className={style.cart}>
        <img className={style.img} src={img} alt={name} />
        <div className={style.info}>
          <h3 className={style.name}>{name}</h3>
          <div className={style.count}>
            <button
              className={style.minus}
              onClick={() => setDecrementOrder(id)}
              disabled={cartCount === 1}
            >
              <Icon24MinusOutline width={24} height={24} style={{ color: "#000000" }}/>
            </button>
            <div className={style.cartCount}>{cartCount}</div>
            <button
              className={style.plus}
              onClick={() => setIncrementOrder(id)}
              disabled={cartCount >= 10}
            >
              <Icon24Add width={24} height={24} style={{ color: "#000000" }}/>
            </button>
          </div>
          <h3 className={style.price}>{price} ₽</h3>
          <button
            className={style.close}
            onClick={() => {
              removeFromBasket(id);
            }}
          >
            <Icon20Cancel style={{ color: "#000000" }}/>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={style.cart}>
      <img className={style.img} src={img} alt={name} />
      <div className={style.info}>
        <h3 className={style.name}>{name}</h3>
        <h3 className={style.price}>{price} ₽</h3>
        <div className={style.count}>
          <button
            className={style.minus}
            onClick={() => setDecrementOrder(id)}
            disabled={cartCount === 1}
          >
            <Icon24MinusOutline width={24} height={24} style={{ color: "#000000" }}/>
          </button>
          <div className={style.cartCount}>{cartCount}</div>
          <button
            className={style.plus}
            onClick={() => setIncrementOrder(id)}
            disabled={cartCount >= 10}
          >
            <Icon24Add width={24} height={24} style={{ color: "#000000" }}/>
          </button>
        </div>
        <button className={style.buttonBlue} onClick={() => {
          removeFromBasket(id);
        }}>
          <div className={style.buttonText}>
            <Icon20Cancel style={{ marginRight: "5px"}} /> Удалить
          </div>
        </button>
      </div>
    </div>
  );
}
