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
    <table>
      <tr>
        <th>Product</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
      {testProduct.map((product) => {
        return (
          <tr>
            <td>{product.title}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>4</td>
            <td>{product.price}</td>
          </tr>
        );
      })}
    </table>
  );
}

// {arr.map((card: CardProps) => {
//     return (
//       <Card
//         id={card.id}
//         key={card.id}
//         title={card.title}
//         image={card.image}
//         price={card.price}
//       />
//     );
//   })}
