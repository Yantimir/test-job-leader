import style from "./Cards.module.css";
import { Card } from "../Card/Card";
// import data from "../../data/data.json";
import { useContext } from "react";
import { ShopContext } from "../../context/context";

export const Cards = () => {

  const { goods = [] } = useContext(ShopContext);

  return (
    <>
      {goods.length && <div className="container">
        <h1 className={style.title}>Каталог товаров</h1>
        <div className={style.cards}>
          {goods.length && goods.map(item => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>}
    </>
  )
}
