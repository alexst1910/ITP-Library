import BookCard from "../BookCard/BookCard";
import Book from "../../interfaces/book";

//props.cards is an array of object where each object is a book with properties
const BookList = (props: { cards: Book[] }) => {
  return (
    <ul className="card-group">
      {props.cards.map((card) => {
        return (
          <BookCard
            key={card.id}
            title={card.title}
            price={card.price}
            author={card.author}
            cover={card.cover}
          />
        );
      })}
    </ul>
  );
};

export default BookList;
