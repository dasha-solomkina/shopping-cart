import { useMenuCartContext } from '../store/cartContext';
import cartImg from '../assets/cart.png';

export default function CartCount() {
  const { totalQuantity } = useMenuCartContext();

  return (
    <div id="menu-count">
      <img src={cartImg} alt="cart" />
      {totalQuantity === 0 ? '' : <div id="counter">{totalQuantity}</div>}
    </div>
  );
}
