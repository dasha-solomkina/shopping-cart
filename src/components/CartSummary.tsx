export default function CartSummary() {
  return (
    <div className="cart-summary">
      <h3>Summary</h3>
      <div className="cart-info">
        <p>Subtotal</p>
        <p>$198</p>
      </div>
      <div className="cart-info">
        <p>Shipping</p>
        <p>$19</p>
        {/* add later the 10% function */}
      </div>
      <div id="cart-total">
        <p>Total</p>
        <p>$217</p>
      </div>
      <button id="checkout-btn-cart">Checkout</button>
      <div id="payment-options">
        <p>Secure ways to pay</p>
        <img src="src/assets/payment.webp" alt="payment options" />
      </div>
    </div>
  );
}
