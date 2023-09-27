import { useParams } from "react-router-dom";
import BookDetail from "../../components/BookDetail/BookDetail";
import classes from "../BookDetailPages/BookDetailPage.module.css";
import { allBooks } from "../../assets/allBooks";
const BookDetailPage = () => {
  const { id } = useParams();

  const book = allBooks.find((book) => book.id.toString() === id)!;

  return (
    <div className={`container ${classes.item}`}>
      <BookDetail
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        price={book.price}
        cover={book.cover}
      />
    </div>
  );
};
export default BookDetailPage;
