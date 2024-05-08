import Layout from '../components/Layout';
import CartSummary from '../components/CartSummary';
import CartTable from '../components/CartTable';

export default function Cart() {
  return (
    <Layout>
      <div className="container-cart">
        {/* <h2>CART PAGE!</h2> */}
        <CartTable />
        <CartSummary />
      </div>
    </Layout>
  );
}
