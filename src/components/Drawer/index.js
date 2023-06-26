import React from 'react';

const Drawer = () => {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{' '}
          <img
            className="removeBtn cu-p"
            src="/assets/img/btn-remove.svg"
            alt=""
          />
        </h2>
        <div className="cartItems">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/assets/img/sneakers/1.jpg)' }}
              className="cartItemImg"
            ></div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/assets/img/btn-remove.svg"
              alt=""
            />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/assets/img/sneakers/2.jpg)' }}
              className="cartItemImg"
            ></div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/assets/img/btn-remove.svg"
              alt=""
            />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li className="d-flex">
              <span>Итого</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenBtn">
            Оформить заказ
            <img src="/assets/img/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
