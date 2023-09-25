import { ReactNode, createContext, useContext, useState } from "react";
import ShoppingCartItem from "../components/ShoppingCartItem/ShoppingCartItem";
import ShoppingCart from "../pages/ShoppingCart";

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
};
type ShoppingCartContext = {
  removeFromCart: (id: number) => void;
  openCart: () => void;
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const removeFromCart = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };
  const openCart = () => {
    setIsOpen(true);
  };
  return (
    <ShoppingCartContext.Provider value={{ removeFromCart, openCart }}>
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
};
