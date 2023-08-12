import React from 'react';
import { useSelector } from 'react-redux';

const CartContainer = () => {
  const { amount } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>買い物かご</h2>
          <h4 className="empty-cart">何も入っていません</h4>
        </header>
      </section>
    );
  }
};

export default CartContainer;
