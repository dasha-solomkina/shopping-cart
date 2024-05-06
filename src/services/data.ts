export type FetchedDataProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export default async function fetchProducts(): Promise<FetchedDataProps[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error('Something went wrong.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
