import Layout from '../components/Layout';
import CartSummary from '../components/CartSummary';
import CartTable from '../components/CartTable';

export default function Cart() {
  return (
    <Layout>
      <div className="container-cart">
        <CartTable />
        <CartSummary />
      </div>
    </Layout>
  );
}
