import { useMenuCartContext } from '../store/cartContext';

export default function CartSummary() {
  const { cartItems } = useMenuCartContext();

  const updatedItems = [...cartItems];

  const sum = updatedItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity;
  }, 0);

  const delivery = sum * 0.1;
  const total = sum + delivery;

  return (
    <div className="cart-summary">
      <h3>Summary</h3>
      <div className="cart-info">
        <p>Subtotal</p>
        <p>${sum.toFixed(2)}</p>
      </div>
      <div className="cart-info">
        <p>Shipping</p>
        <p>${delivery.toFixed(2)}</p>
      </div>
      <div id="cart-total">
        <p>Total</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <button id="checkout-btn-cart">Checkout</button>
      <div id="payment-options">
        <p>Secure ways to pay</p>
        <img src="src/assets/payment.webp" alt="payment options" />
      </div>
    </div>
  );
}
