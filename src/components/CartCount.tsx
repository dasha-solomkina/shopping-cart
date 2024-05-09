import { useMenuCartContext } from '../store/cartContext';

export default function CartCount() {
  const { totalQuantity } = useMenuCartContext();

  return (
    <div id="menu-count">
      <img src="../src/assets/cart.png" alt="cart" />
      {totalQuantity === 0 ? '' : <div id="counter">{totalQuantity}</div>}
      {/* <div id="counter">{totalQuantity}</div> */}
    </div>
  );
}
