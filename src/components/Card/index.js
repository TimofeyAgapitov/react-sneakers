import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <div className="card__favorite">
        <img src="/assets/img/unliked.svg" alt="unliked" />
      </div>
      <img
        width={133}
        height={112}
        src="/assets/img/sneakers/1.jpg"
        alt="Кросссовки 1"
      />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена</span>
          <b>12 999 руб.</b>
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