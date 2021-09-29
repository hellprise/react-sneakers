import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from '../hooks/useCart';

function Header(props) {
  const {totalPrice} = useCart()

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-3">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img src="/img/cart.svg" alt="cart user" />
          <span>{totalPrice} UAH</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img src="/img/heart.svg" alt="favorite" />
          </Link>
        </li>
          <Link to="/orders">
            <img src="/img/user.svg" alt="profile" />
          </Link>
      </ul>
    </header>
  );
}

export default Header;
