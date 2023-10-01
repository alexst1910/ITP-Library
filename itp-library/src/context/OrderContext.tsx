import { ReactNode, useContext, useState, createContext } from "react";
import Book from "../interfaces/book";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { allBooks } from "../assets/allBooks";

type OrderContextProps = {
  addToOrder: () => void;
  updateOrder: (id: number) => void;
  orderItems: Book[];
};

export const OrderContext = createContext({} as OrderContextProps);

type OrderContextProviderProps = {
  children: ReactNode;
};
export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const { cartItems, removeFromCart } = useContext(ShoppingCartContext);
  const [orderItems, setOrderItems] = useState<Book[]>([]);

  const addToOrder = () => {
    let orderedBooks = [];
    for (const itemID in cartItems) {
      if (cartItems[itemID] > 0) {
        let itemInfo = allBooks.find((item) => item.id === Number(itemID))!;
        if (itemInfo) {
          for (let i = 0; i < cartItems[itemID]; i++) {
            orderedBooks.push(itemInfo);
          }
        }
        console.log(itemInfo);
        removeFromCart(itemInfo.id);
      }
    }
    setOrderItems(orderedBooks);
  };
  const updateOrder = (id: number) => {};

  return (
    <OrderContext.Provider value={{ addToOrder, orderItems, updateOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
