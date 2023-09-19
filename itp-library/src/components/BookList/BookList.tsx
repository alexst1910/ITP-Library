import BookCard from "../BookCard/BookCard";
import Book from "../../interfaces/book";

//props.cards is an array of object where each object is a book with properties
const BookList = (props: { cards: Book[]; section: string }) => {
  return (
    <div className="mt-3 row gy-4 mb-5 bg-white" style={{ zIndex: "1" }}>
      <div className="fs-4">{props.section}</div>

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
    </div>
  );
};

export default BookList;
