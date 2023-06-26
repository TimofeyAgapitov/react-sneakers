import React from 'react';

const Header = () => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/assets/img/logo.png" alt="Логотип" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img
            width={18}
            height={18}
            src="/assets/img/cart.svg"
            alt="Иконка корзина"
          />
          <span>1203 руб.</span>
        </li>
        <li>
          <img
            width={18}
            height={18}
            src="/assets/img/user.svg"
            alt="Иконка профиля"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
