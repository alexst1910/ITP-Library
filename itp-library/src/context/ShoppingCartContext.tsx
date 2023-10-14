import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { allBooks } from "../assets/allBooks";
import Book from "../interfaces/book";

type ShoppingCartContextProps = {
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: { [key: number]: number };
  getTotal: () => number;
  cartAmount: () => number;
  orderItems: any[];
  addToOrder: () => void;
  buttonValue: string;

  isAuth: boolean;
  handleAuth: () => void;
  signOut: () => void;
  inputFields: any;
  errors: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;

  setInputFields: Dispatch<
    SetStateAction<{
      firstName: string;
      lastName: string;
      address: string;
      phone: string;
    }>
  >;
  setErrors: Dispatch<
    SetStateAction<{
      firstName: string;
      lastName: string;
      address: string;
      phone: string;
      phoneLength: string;
      phoneFormat: string;
    }>
  >;

  setButtonValue: Dispatch<SetStateAction<string>>;
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

const orderedBooks: any[] = [];

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState(getDefaultCart(allBooks));
  const [orderItems, setOrderItems] = useState<Book[]>([]);

  // place order button functionalities
  const [buttonValue, setButtonValue] = useState("Place Order");

  // form inputs logic
  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    phoneLength: "",
    phoneFormat: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputFields({ ...inputFields, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  // authentication logic
  const [isAuth, setIsAuth] = useState(false);

  const handleAuth = () => {
    setIsAuth(true);
  };

  const signOut = () => {
    setIsAuth(false);
  };

  //order functionalities

  const addToOrder = () => {
    const order = {
      totalPrice: 0,
      totalQuantity: 0,
    };

    for (const itemID in cartItems) {
      if (cartItems[itemID] > 0) {
        let itemInfo = allBooks.find((item) => item.id === Number(itemID))!;

        if (itemInfo) {
          order.totalQuantity += cartItems[itemID];
          order.totalPrice += cartItems[itemID] * itemInfo.price;
        }
      }
    }

    orderedBooks.push(order);
    setOrderItems(orderedBooks);
    setCartItems(getDefaultCart(allBooks));
    console.log(orderedBooks);
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
        isAuth,
        handleAuth,
        signOut,
        inputFields,
        errors,
        handleChange,
        setErrors,
        setInputFields,
        setButtonValue,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
