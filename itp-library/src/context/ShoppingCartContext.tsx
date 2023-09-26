import { ReactNode, createContext, useContext, useState } from "react";
import { allBooks } from "../assets/allBooks";
import Book from "../interfaces/book";

// import ShoppingCartItem from "../components/ShoppingCartItem/ShoppingCartItem";
// import ShoppingCart from "../pages/ShoppingCart";

// const ShoppingCartContext = createContext({} as ShoppingCartContext);

// export const useShoppingCart = () => {
//   return useContext(ShoppingCartContext);
// };

// type ShoppingCartProviderProps = {
//   children: ReactNode;
// };

// type CartItem = {
//   id: number;
// };
// type ShoppingCartContext = {
//   removeFromCart: (id: number) => void;
//   openCart: () => void;
// };

// export const ShoppingCartProvider = ({
//   children,
// }: ShoppingCartProviderProps) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const removeFromCart = (id: number) => {
//     setCartItems((currentItems) => {
//       return currentItems.filter((item) => item.id !== id);
//     });
//   };
//   const openCart = () => {
//     setIsOpen(true);
//   };
//   return (
//     <ShoppingCartContext.Provider value={{ removeFromCart, openCart }}>
//       {children}
//       <ShoppingCart />
//     </ShoppingCartContext.Provider>
//   );
// };

type ShoppingCartContextProps = {
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: { [key: number]: number };
};
export const ShoppingCartContext = createContext(
  {} as ShoppingCartContextProps
);

type ShoppingCartProviderProps = {
  children: ReactNode;
};
const getDefaultCart = (books: Book[]) => {
  let cart: { [key: number]: number } = {};
  for (let i = 1; i < books.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState(getDefaultCart(allBooks));

  const addToCart = (id: number) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
  const removeFromCart = (id: number) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };
  console.log(cartItems);
  return (
    <ShoppingCartContext.Provider
      value={{ addToCart, removeFromCart, cartItems }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
