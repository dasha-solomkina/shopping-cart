import { useMenuCartContext } from '../store/cartContext';
import { useState } from 'react';

export type CardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function Card({ id, title, image, price }: CardProps) {
  const { addToCart } = useMenuCartContext();
  const [quantity, setQuantity] = useState(1);

  const handleAddToBag = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addToCart(quantity);
  };

  return (
    <div className="card" key={id}>
      <img src={image} alt={title} />
      <form className="card-checkout" onSubmit={handleAddToBag}>
        <input
          type="number"
          min="1"
          max="15"
          placeholder="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button type="submit" className="card-addToBag-btn">
          Add to bag
        </button>
      </form>
      <p className="title">{title}</p>
      <p className="price">${price}</p>
    </div>
  );
}
