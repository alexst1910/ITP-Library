import cover from "../../images/the-mind-of-a-leader-cover.jpg";
import classes from "../BookCard/BookCard.module.css";
const BookCard = () => {
  return (
    <div className="card" style={{ width: "16rem" }}>
      <img className="card-img-top" alt="" src={cover} />
      <div className="card-body sm">
        <h5 className="card-title">
          <span className={classes.lora}>The mind of a leader</span>
        </h5>
        <h6
          className="card-subtitle mb-2 text-muted"
          style={{ color: "#C6B800" }}
        >
          $90
        </h6>
        <p className="card-text">
          <span className={classes.description}>Kevin Anderson</span>
        </p>
        <button className="btn btn-dark" style={{ width: "13rem" }}>
          <span className={classes.buttontext}>Add to cart</span>
        </button>
      </div>
    </div>
  );
};
export default BookCard;
