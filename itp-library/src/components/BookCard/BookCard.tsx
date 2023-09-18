//import cover from "../../images/the-mind-of-a-leader-cover.jpg";
import classes from "../BookCard/BookCard.module.css";

const BookCard = (props: {
  title: string;
  price: string;
  author: string;
  cover: string;
}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-2">
      <div className={`card ${classes.lora} border-0`}>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${props.cover})`,
          }}
        ></div>
        <div className="card-body p-0">
          <h5 className="card-title">
            <span className={classes.title}>{props.title}</span>
          </h5>
          <h6
            className="card-subtitle mb-2 text-muted"
            style={{ color: classes.gold }}
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
    </div>
  );
};
export default BookCard;
