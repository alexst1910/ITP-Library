import BookList from "../components/BookList/BookList";
import {
  BestBooks,
  SectionOne,
  RecentBooks,
  SectionTwo,
} from "../assets/BookDetails";

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <BookList cards={BestBooks} section={SectionOne} />
      <BookList cards={RecentBooks} section={SectionTwo} />
    </div>
  );
};
export default HomePage;
