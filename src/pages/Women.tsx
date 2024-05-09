import Layout from '../components/Layout';
import fetchProducts, { FetchedDataProps } from '../store/data.ts';
import CardsGrid from '../components/CardsGrid.tsx';
import { useEffect, useState } from 'react';
import { CardProps } from '../components/Card.tsx';

import loadingImg from '../assets/loading.png';

export default function Women() {
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

  const filteredProducts = fetchedProducts?.filter((product) => {
    return product.category === "women's clothing";
  }) as CardProps[];

  return (
    <Layout>
      <div className="container">
        <h2>Women</h2>
        {fetchedProducts && fetchedProducts.length > 0 && (
          <CardsGrid arr={filteredProducts} />
        )}
      </div>
    </Layout>
  );
}
