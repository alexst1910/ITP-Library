//import cover from "../../images/the-mind-of-a-leader-cover.jpg";
import classes from "../BookCard/BookCard.module.css";

const BookCard = (props: {
  title: string;
  price: string;
  author: string;
  cover: string;
}) => {
  return (
    <div className={`card ${classes.lora} border-0`}>
      <img className="card-img-top rounded-0" alt="" src={`${props.cover}`} />
      <div className="card-body">
        <h5 className="card-title">
          <span className={classes.title}>{props.title}</span>
        </h5>
        <h6
          className="card-subtitle mb-2 text-muted"
          style={{ color: "#C6B800" }}
        >
          {props.price}
        </h6>
        <p className="card-text">
          <span className={classes.description}>{props.author}</span>
        </p>
        <button className="btn btn-dark w-100">
          <span className={classes.buttontext}>Add to cart</span>
        </button>
      </div>
    </div>
  );
};
export default BookCard;
