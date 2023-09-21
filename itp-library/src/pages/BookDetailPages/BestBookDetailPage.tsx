import { useParams } from "react-router-dom";
import BookDetail from "../../components/BookDetail/BookDetail";
import classes from "../BookDetailPages/BookDetailPage.module.css";
import { BestBooks } from "../../assets/BookDetails";
const BestBookDetailPage = () => {
  const { id } = useParams();
  const best = BestBooks.find((best) => best.id.toString() === id)!;

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
export default BestBookDetailPage;
