export type CardProps = {
  id: number;
  title: string;
  price: number;
  //   category: string;
  //   description: string;
  image: string;
};

export default function Card({ id, title, image, price }: CardProps) {
  return (
    <div className="card" key={id}>
      <img src={image} alt={title} />
      <div className="card-checkout">
        <input
          className="quantity-input"
          type="number"
          min="1"
          max="15"
          placeholder="1"
        />
        <button className="card-addToBag-btn">Add to bag</button>
      </div>
      <p className="title">{title}</p>
      <p className="price">${price}</p>
    </div>
  );
}
