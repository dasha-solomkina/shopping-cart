import { CardQuantityProps } from '../store/cartContext';
import { useMenuCartContext } from '../store/cartContext';
import binImg from '../assets/bin.png';

export default function NewCartItem({
  id,
  title,
  image,
  price,
  quantity,
}: CardQuantityProps) {
  const { deleteItem, increaseOne, decreaseOne } = useMenuCartContext();

  const total = price * quantity;

  const handleDelete = () => {
    deleteItem({ id, title, image, price, quantity });
  };

  const handleIncrease = () => {
    increaseOne({ id, title, image, price, quantity });
  };

  const handleDecrease = () => {
    decreaseOne({ id, title, image, price, quantity });
  };

  return (
    <div className="item" key={id}>
      <div>
        <img className="cart-product" src={image} alt="" />
      </div>
      <p>{title}</p>
      <p>{price}</p>
      <p>
        {' '}
        <span onClick={handleDecrease} className="changeOne">
          -
        </span>{' '}
        {quantity}{' '}
        <span onClick={handleIncrease} className="changeOne">
          +
        </span>{' '}
      </p>
      <p>{total.toFixed(2)}</p>
      <div onClick={handleDelete}>
        <img className="bin" src={binImg} alt="delete item" />
      </div>
    </div>
  );
}
