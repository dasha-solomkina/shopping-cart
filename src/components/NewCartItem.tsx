export default function NewCartItem() {
  return (
    <div className="item">
      <div>
        <img
          className="cart-product"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
      </div>
      <p>name</p>
      <p>number</p>
      <p>quantity</p>
      <p>total</p>
      <div>
        <img className="bin" src="src/assets/bin.png" alt="" />
      </div>
    </div>
  );
}
