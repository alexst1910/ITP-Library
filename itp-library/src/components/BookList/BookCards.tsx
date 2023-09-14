import React from "react";
import BookList from "./BookList";
import Book from "../../interfaces/book";
import cover_1 from "../../images/the-mind-of-a-leader-cover.jpg";
import cover_2 from "../../images/lunar-storm.jpg";
import cover_3 from "../../images/normal-people.jpg";
import cover_4 from "../../images/Sin-Eater-by-Megan-Campisi.jpg";
import cover_5 from "../../images/educated.jpg";

const books: Book[] = [
  {
    id: 1,
    title: "The mind of a leader",
    price: "$90",
    author: "Kevin Anderson",
    cover: cover_1,
  },
  {
    id: 2,
    title: "Lunar Storm",
    price: "$60",
    author: "Terry Crosby",
    cover: cover_2,
  },
  {
    id: 3,
    title: "Normal People",
    price: "$75",
    author: "Sally Rooney",
    cover: cover_3,
  },
  {
    id: 4,
    title: "Sin Eater",
    price: "$50",
    author: "Megan Campisi",
    cover: cover_4,
  },
  {
    id: 4,
    title: "Educated",
    price: "$70",
    author: "Tara Westover",
    cover: cover_5,
  },
];
const BookCards = () => {
  return <BookList cards={books} />;
};

export default BookCards;
