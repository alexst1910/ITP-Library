import { useParams } from "react-router-dom";
import BookDetail from "../components/BookDetail/BookDetail";
import classes from "../pages/BookDetailPage.module.css";
import { BestBooks, RecentBooks } from "../assets/BookDetails";
const BookDetailPage = () => {
  const { id } = useParams();
  const best = BestBooks.find((best) => best.id.toString() === id)!;
  const recent = RecentBooks.find((recent) => recent.id.toString() === id)!;

  return (
    <div className={`container ${classes.item}`}>
      <BookDetail
        title={best.title}
        author={best.author}
        price={best.price}
        cover={best.cover}
      />
    </div>
  );
};
export default BookDetailPage;
