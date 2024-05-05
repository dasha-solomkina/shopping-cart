import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
