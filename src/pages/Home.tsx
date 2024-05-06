import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Layout>
      <div className="container-home">
        <Link to="shop">
          <button id="btn-shop-now">Shop now</button>
        </Link>
      </div>
    </Layout>
  );
}
