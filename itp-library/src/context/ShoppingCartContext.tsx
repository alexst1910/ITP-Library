import { FormEvent, ReactNode, createContext, useState } from "react";
import { allBooks } from "../assets/allBooks";
import Book from "../interfaces/book";

type ShoppingCartContextProps = {
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: { [key: number]: number };
  getTotal: () => number;
  cartAmount: () => number;
  orderItems: Book[];
  addToOrder: () => void;
  buttonValue: string;
  handleButtonValue: () => void;
  showModal: boolean;
  handleShowModal: (e: FormEvent) => void;
  handleCloseModal: () => void;
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
  const [orderItems, setOrderItems] = useState<Book[]>([]);

  // place order button functionalities
  const [buttonValue, setButtonValue] = useState("Place Order");
  const [showModal, setShowModal] = useState(false);
  const handleButtonValue = () => {
    setButtonValue("Update Order");
    console.log(buttonValue);
  };

  const handleShowModal = (e: FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  //order functionalities
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
      }
    }
    setOrderItems(orderedBooks);
  };

  const addToCart = (id: number) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
  const removeFromCart = (id: number) => {
    if (cartItems[id] && cartItems[id] > 0) {
      setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

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

  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        cartItems,
        getTotal,
        cartAmount,
        removeFromCart,
        orderItems,
        addToOrder,
        buttonValue,
        handleButtonValue,
        showModal,
        handleShowModal,
        handleCloseModal,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
