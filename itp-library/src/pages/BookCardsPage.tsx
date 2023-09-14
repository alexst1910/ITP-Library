import BookList from "../components/BookList/BookList";
import Book from "../interfaces/book";

const books: Book[] = [
  {
    id: 1,
    title: "The mind of a leader",
    price: "$90",
    author: "Kevin Anderson",
    cover: "../../images/the-mind-of-a-leader-cover.jpg",
  },
  {
    id: 2,
    title: "Lunar Storm",
    price: "$60",
    author: "Terry Crosby",
    cover: "../../images/lunar-storm.jpg",
  },
  {
    id: 3,
    title: "Normal People",
    price: "$75",
    author: "Sally Rooney",
    cover: "../../images/normal-people.jpg",
  },
  {
    id: 4,
    title: "Sin Eater",
    price: "$50",
    author: "Megan Campisi",
    cover: "../../images/Sin-Eater-by-Megan-Campisi.jpg",
  },
  {
    id: 4,
    title: "Educated",
    price: "$70",
    author: "Tara Westover",
    cover: "../../images/educated.jpg",
  },
];
const BookCardsPage = () => {
  return (
    <div>
      <BookList cards={books} />
    </div>
  );
};

export default BookCardsPage;
