export default function CartSummary() {
  return (
    <div className="cart-summary">
      <h3>Summary</h3>
      <div>
        <p>Subtotal</p>
        <p>$198</p>
      </div>
      <div>
        <p>Shipping</p>
        <p>$19</p>
        {/* add later the 10% function */}
      </div>
      <div>
        <p>Total</p>
        <p>$217</p>
      </div>
      <button>Checkout</button>
      <p>Secure ways to pay</p>
      {/* <img src="../assets/payment.jpg" /> */}
      <img src="src/assets/payment.webp" alt="" />
    </div>
  );
}
