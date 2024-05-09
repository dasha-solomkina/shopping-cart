import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import fetchProducts, { FetchedDataProps } from '../store/data.ts';
import CardsGrid from '../components/CardsGrid.tsx';

import loadingImg from '../assets/loading.png';

export default function Shop() {
  const [fetchedProducts, setFetchedProducts] = useState<
    FetchedDataProps[] | null
  >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setFetchedProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <Layout>
        <div className="loading-container">
          <img src={loadingImg} alt="loading" />
        </div>
      </Layout>
    );

  return (
    <Layout>
      <div className="container">
        <h2>All products</h2>
        {fetchedProducts && fetchedProducts.length > 0 && (
          <CardsGrid arr={fetchedProducts} />
        )}
      </div>
    </Layout>
  );
}
