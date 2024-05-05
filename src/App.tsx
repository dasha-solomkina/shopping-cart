import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Men from './pages/Men.tsx';
import Women from './pages/Women.tsx';
import Jewelry from './pages/Jewelry.tsx';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'cart', element: <Cart /> },
  { path: 'shop', element: <Shop /> },
  { path: 'shop/men', element: <Men /> },
  { path: 'shop/women', element: <Women /> },
  { path: 'shop/jewelry', element: <Jewelry /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
