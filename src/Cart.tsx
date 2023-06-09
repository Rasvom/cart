import React, { useState } from "react";
import styles from "./Cart.module.css";
import { CartData } from "./App";


const Cart = ({ name, text, image, price }: CartData) => {
  const [buy, setBuy] = useState(false);
  const [popUp, setPopUp] = useState(false);

  return (
    <div className={styles.wrap}>
      <img src={image} alt="nike" />
      <div className={styles.digital}>
        <div>
          <div className={styles.text}>{name}</div>
          <div className={styles.text}>{price}</div>
        </div>
        <div className={styles.digitalBlock}>
          <button className={styles.digitalBtn} onClick={() => setPopUp(true)}>
            Детали
          </button>
        </div>
        {popUp ? (
          <div className={styles.popup}>
            {text}
            <span className={styles.delete} onClick={() => setPopUp(false)}>
              X
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.buyBlock}>
        <hr />
        <div className={styles.lorem}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </div>
        {buy ? (
          <button className={styles.disabled} disabled>
            уже в корзине
          </button>
        ) : (
          <button className={styles.addBtn} onClick={() => setBuy(true)}>
            Добавить в корзину
          </button>
        )}
        {buy ? (
          <div className={styles.delete} onClick={() => setBuy(false)}>
            Удалить из корзины
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
