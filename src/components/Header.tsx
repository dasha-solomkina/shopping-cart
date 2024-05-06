import BasicMenu from './DropMenu';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/" className="linkWithoutStyles">
        <h1>Trendzz</h1>
      </Link>
      {/* <p>Shop</p>
      <p>Women</p>
      <p>Men</p>
      <p>Jewerly</p> */}
      <BasicMenu />
      <p>Cart</p>
    </header>
  );
}
