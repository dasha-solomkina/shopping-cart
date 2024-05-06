import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import fetchProducts, { FetchedDataProps } from '../services/data.ts';
import CardsGrid from '../components/CardsGrid.tsx';

export default function Shop() {
  const [fetchedProducts, setFetchedProducts] = useState<
    FetchedDataProps[] | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setFetchedProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div>
        <h2>SHOP PAGE!</h2>
        {fetchedProducts && fetchedProducts.length > 0 && (
          <CardsGrid arr={fetchedProducts} />
        )}
      </div>
    </Layout>
  );
}
