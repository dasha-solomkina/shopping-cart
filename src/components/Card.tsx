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
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}
