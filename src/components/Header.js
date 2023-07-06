import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onClickCart }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to={'/'}>
        <div className="d-flex align-center">
          <img
            width={40}
            height={40}
            src="/assets/img/logo.png"
            alt="Логотип"
          />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img
            width={18}
            height={18}
            src="/assets/img/cart.svg"
            alt="Корзина"
          />
          <span>1203 руб.</span>
        </li>
        <li className="cu-p">
          <Link to={'/favorites'}>
            <img
              width={18}
              height={18}
              src="/assets/img/heart.svg"
              alt="Закладки"
            />
          </Link>
        </li>
        <li className="cu-p">
          <Link to={'/orders'}>
            <img
              width={18}
              height={18}
              src="/assets/img/user.svg"
              alt="Пользователь"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
