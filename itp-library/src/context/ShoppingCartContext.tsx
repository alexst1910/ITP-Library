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
  //removeFromCart: (id: number) => void;
  cartItems: { [key: number]: number };
  getTotal: () => number;
  cartAmount: () => number;
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
  // const removeFromCart = (id: number) => {
  //   setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  // };

  const cartAmount = () => {
    let amount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let itemInfo = allBooks.find((item) => item.id === Number(itemId))!;
        if (itemInfo) {
          amount += cartItems[itemId];
        }
      }
    }
    return amount;
  };
  const getTotal = () => {
    let total = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let itemInfo = allBooks.find((item) => item.id === Number(itemId))!;
        if (itemInfo) {
          total += cartItems[itemId] * itemInfo?.price;
        }
      }
    }
    return total;
  };

  console.log(cartItems);
  return (
    <ShoppingCartContext.Provider
      value={{ addToCart, cartItems, getTotal, cartAmount }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
