import { type ReactNode, createContext, useContext, useState } from 'react';
import { CardProps } from '../components/Card';

export type CardQuantityProps = CardProps & {
  quantity: number;
};

type GeneralCartContextValue = {
  cartItems: CardQuantityProps[];
  totalQuantity: number;
  addToMenuCount: (quantity: number) => void;
  addToCart: (item: CardQuantityProps) => void;
  deleteItem: (item: CardQuantityProps) => void;
  increaseOne: (item: CardQuantityProps) => void;
  decreaseOne: (item: CardQuantityProps) => void;
};

const MenuCartContext = createContext<GeneralCartContextValue | null>(null);

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
  const [cartItems, setCartItems] = useState<CardQuantityProps[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  function addToMenuCount(quantity: number) {
    setTotalQuantity((prevQuantity) => prevQuantity + quantity);
  }

  function addToCart(item: CardQuantityProps) {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity += item.quantity;
      setCartItems(updatedItems);
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  }

  function deleteItem(item: CardQuantityProps) {
    setTotalQuantity((prevQuantity) => prevQuantity - item.quantity);
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems.splice(itemIndex, 1);
      setCartItems(updatedItems);
    }
  }

  function increaseOne(item: CardQuantityProps) {
    setTotalQuantity((prevQuantity) => prevQuantity + 1);

    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity += 1;
      setCartItems(updatedItems);
    }
  }

  function decreaseOne(item: CardQuantityProps) {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      const updatedItems = [...cartItems];
      if (updatedItems[itemIndex].quantity === 1) {
        updatedItems.splice(itemIndex, 1);
        setCartItems(updatedItems);
        setTotalQuantity((prevQuantity) => prevQuantity - item.quantity);
      } else {
        updatedItems[itemIndex].quantity -= 1;
        setCartItems(updatedItems);
        setTotalQuantity((prevQuantity) => prevQuantity - 1);
      }
    }
  }

  const contextValue: GeneralCartContextValue = {
    totalQuantity,
    cartItems,
    addToMenuCount,
    addToCart,
    deleteItem,
    increaseOne,
    decreaseOne,
  };

  return (
    <MenuCartContext.Provider value={contextValue}>
      {children}
    </MenuCartContext.Provider>
  );
}
