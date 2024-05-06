import Card, { CardProps } from './Card';

export default function CardsGrid({ arr }: { arr: CardProps[] }) {
  return (
    <div className="grid-cards">
      {arr.map((card: CardProps) => {
        return (
          <Card
            id={card.id}
            key={card.id}
            title={card.title}
            image={card.image}
            price={card.price}
          />
        );
      })}
    </div>
  );
}
