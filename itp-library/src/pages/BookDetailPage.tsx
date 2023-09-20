import BookDetail from "../components/BookDetail/BookDetail";
import cover from "../images/the-mind-of-a-leader-cover.jpg";

const BookDetailPage = () => {
  return (
    <BookDetail
      title="The mind of a leader"
      author="Kevin Anderson"
      price="$90"
      cover={cover}
    />
  );
};
export default BookDetailPage;
