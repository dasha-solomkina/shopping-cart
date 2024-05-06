import Layout from '../components/Layout';
import fetchProducts, { FetchedDataProps } from '../services/data.ts';
import CardsGrid from '../components/CardsGrid.tsx';
import { useEffect, useState } from 'react';
import { CardProps } from '../components/Card.tsx';

export default function Men() {
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

  const filteredProducts = fetchedProducts?.filter((product) => {
    return product.category === "men's clothing";
  }) as CardProps[];

  return (
    <Layout>
      <div>
        <h2>MEN PAGE! here</h2>
        {fetchedProducts && fetchedProducts.length > 0 && (
          <CardsGrid arr={filteredProducts} />
        )}
      </div>
    </Layout>
  );
}
