import { useParams } from "react-router-dom";
import BookDetail from "../../components/BookDetail/BookDetail";
import classes from "../BookDetailPages/BookDetailPage.module.css";
import { BestBooks, RecentBooks } from "../../assets/BookDetails";
const BookDetailPage = () => {
  const { id } = useParams();
  const allBooks = BestBooks.concat(RecentBooks);

  const book = allBooks.find((book) => book.id.toString() === id)!;

  return (
    <div className={`container ${classes.item}`}>
      <BookDetail
        title={book.title}
        author={book.author}
        price={book.price}
        cover={book.cover}
      />
    </div>
  );
};
export default BookDetailPage;
