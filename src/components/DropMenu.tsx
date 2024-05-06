import { Link } from 'react-router-dom';

export default function BasicMenu() {
  return (
    <>
      <Link to="../shop" className="linkWithoutStyles">
        <p>Shop</p>
      </Link>
      <Link to="../shop/women" className="linkWithoutStyles">
        <p>Women</p>
      </Link>
      <Link to="../shop/men" className="linkWithoutStyles">
        <p>Men</p>
      </Link>
      <Link to="../shop/jewelry" className="linkWithoutStyles">
        <p>Jewerly</p>
      </Link>
    </>
  );
}
