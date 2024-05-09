import { type ReactNode, createContext, useContext, useState } from 'react';

type MenuCartContextValue = {
  totalQuantity: number;
  addToCart: (quantity: number) => void;
};

const MenuCartContext = createContext<MenuCartContextValue | null>(null);

export function useMenuCartContext() {
  const context = useContext(MenuCartContext);

  if (!context) {
    throw new Error(
      'useMenuCartContext must be used within a MenuCartProvider'
    );
  }

  return context;
}

type MenuCartProviderProps = {
  children: ReactNode;
};

export function MenuCartProvider({ children }: MenuCartProviderProps) {
  const [totalQuantity, setTotalQuantity] = useState(0);

  function addToCart(quantity: number) {
    setTotalQuantity((prevQuantity) => prevQuantity + quantity);
  }

  const contextValue: MenuCartContextValue = {
    totalQuantity,
    addToCart,
  };

  return (
    <MenuCartContext.Provider value={contextValue}>
      {children}
    </MenuCartContext.Provider>
  );
}
