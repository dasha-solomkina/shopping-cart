import NewCartItem from './NewCartItem';

export default function CartTable() {
  const testProduct = [
    {
      id: 1,
      title: 'Opna Womens Short Sleeve Moisture',
      price: '7.95',
      // category: 'women',
      // description: '...',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
  ];

  return (
    <div className="cart-table">
      <div className="cart-table-header">
        <h4>Item</h4>
        <h4>&nbsp;</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Total</h4>
      </div>
      <NewCartItem />
      <NewCartItem />
      {/* <NewCartItem />
      <NewCartItem />
      <NewCartItem />
      <NewCartItem />
      <NewCartItem />
      <NewCartItem />
      <NewCartItem />
      <NewCartItem />
      <NewCartItem />
      <NewCartItem />
      <NewCartItem />
      <NewCartItem /> */}
      {/* add: there are no products in the cart, mb button? */}
    </div>
  );
}
