import BookDetail from "../components/BookDetail/BookDetail";
import cover from "../images/the-mind-of-a-leader-cover.jpg";
import classes from "../pages/BookDetailPage.module.css";
const BookDetailPage = () => {
  return (
    <div className={`container ${classes.item}`}>
      <BookDetail
        title="The mind of a leader"
        author="Kevin Anderson"
        price="$90"
        cover={cover}
      />
    </div>
  );
};
export default BookDetailPage;
