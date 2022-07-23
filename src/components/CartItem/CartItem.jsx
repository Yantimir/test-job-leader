import style from "./style.module.css";

export const CartItem = ({ img, name, price, cartCount }) => {
  return (
    <div className={style.cart}>
      <img className={style.img} src={img} alt={name} />
      <div>
        <h3 className={style.name}>{name}</h3>
      </div>
      <div className={style.minus}>-</div>
      <div className={style.cartCount}>{cartCount}</div>
      <div className={style.plus}>+</div>
      <div className={style.price}>{price}</div>
    </div>
  )
}
