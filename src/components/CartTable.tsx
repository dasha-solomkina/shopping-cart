import NewCartItem from './NewCartItem';
import { useMenuCartContext } from '../store/cartContext';
import { CardQuantityProps } from '../store/cartContext';

export default function CartTable() {
  const { cartItems } = useMenuCartContext();

  return (
    <div className="cart-table">
      <div className="cart-table-header">
        <h4>Item</h4>
        <h4>&nbsp;</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Total</h4>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty">
          The cart is empty, please product you would like to buy.
        </p>
      ) : (
        cartItems.map((card: CardQuantityProps) => {
          return (
            <NewCartItem
              id={card.id}
              key={card.id}
              title={card.title}
              image={card.image}
              price={card.price}
              quantity={card.quantity}
            />
          );
        })
      )}
    </div>
  );
}
