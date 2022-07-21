import { useEffect, useState, useContext } from "react";
import style from "./Card.module.css";
import { ShopContext } from "../../context/context";


export const Card = ({ id, img, name, price }) => {

  const { addToBasket, order = [] } = useContext(ShopContext);
  const [width, setWidth] = useState(window.innerWidth);
  const [hover, setHover] = useState(false);
  const breackpoint = 690;
  console.log(order)
  const handleHoverCard = () => {
    setHover(!hover);
  }

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    }
  }, []);

  if (width > breackpoint) {
    return (
      <div
        className={style.card}
        onPointerEnter={() => handleHoverCard()}
        onPointerLeave={() => handleHoverCard()}
      >
        <div>
          <img className={style.img} src={img} alt={name} />
        </div>
        <div>
          <h2 className={style.title}>{name}</h2>
          <h3 className={style.price}>{price} ₽</h3>
          {hover
            ?
            <button className={style.buttonBlue} onClick={() => {
              addToBasket({
                id,
                name,
                price,
                img,
              })
            }}
            >Добавить в корзину</button>
            : null
          }
        </div>
      </div>
    );
  }
  return (
    <div className={style.card}>
      <div>
        <img className={style.img} src={img} alt={name} />
      </div>
      <div>
        <h2 className={style.title}>{name}</h2>
        <h3 className={style.price}>{price} ₽</h3>
        <button className={style.buttonBlue} onClick={() => {
          addToBasket({
            id,
            name,
            price,
            img,
          })
        }}>Добавить в корзину</button>
      </div>
    </div>
  );
}
