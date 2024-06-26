import BasicMenu from './Menu';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/" className="linkWithoutStyles">
        <h1>Trendzz</h1>
      </Link>
      <BasicMenu />
    </header>
  );
}
