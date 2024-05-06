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
        <div className="input-group">
          <button className="decrement-btn">-</button>
          <input type="number" placeholder="1" />
          <button className="increment-btn">+</button>
        </div>
        <button>Add to bag</button>
      </div>
      <p className="title">{title}</p>
      <p className="price">${price}</p>
    </div>
  );
}
