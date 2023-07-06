import React from 'react';

const Drawer = ({ items = [], onClose, onRemoveItem }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{' '}
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/assets/img/btn-remove.svg"
            alt=""
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="cartItems">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20">
                    <p className="mb-5">{item.title}</p>
                    <b>{item.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemoveItem(item)}
                    className="removeBtn"
                    src="/assets/img/btn-remove.svg"
                    alt=""
                  />
                </div>
              ))}
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
          </>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              src="/assets/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onClose} className="greenBtn">
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
