import { useParams } from "react-router-dom";
import { RecentBooks } from "../../assets/BookDetails";
import BookDetail from "../../components/BookDetail/BookDetail";
import classes from "../BookDetailPages/BookDetailPage.module.css";
const RecentBookDetailPage = () => {
  const { id } = useParams();
  const recent = RecentBooks.find((recent) => recent.id.toString() === id)!;

  return (
    <div className={`container ${classes.item}`}>
      <BookDetail
        title={recent.title}
        author={recent.author}
        price={recent.price}
        cover={recent.cover}
      />
    </div>
  );
};
export default RecentBookDetailPage;
