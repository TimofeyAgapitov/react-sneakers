import React from 'react';
import styles from './Card.module.scss';

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/assets/img/unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={item.imgURL} alt="Кросссовки 1" />
      <h5>{item.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена</span>
          <b>{item.price}</b>
        </div>
        <button className="button">
          <img
            width={11}
            height={11}
            src="/assets/img/plus.svg"
            alt="Добавить товар"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
