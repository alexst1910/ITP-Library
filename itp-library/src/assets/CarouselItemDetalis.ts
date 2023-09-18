import CarouselItemData from "../interfaces/carouselItemData";
import libraryCover from "../images/library.jpg";
import discount from "../images/discount-2.jpg";

export const carouselData: CarouselItemData[] = [
  {
    id: 1,
    title: "Buy textbooks for the best prices",
    description:
      "From applied literature to educational resources, we have a lot of textbooks to offer you. We sell only the best books.",
    cover: libraryCover,
  },
  {
    id: 2,
    title: "Create your account",
    description:
      "Don't miss the latest offers and discount codes if you have an account",
    cover: discount,
  },
];
