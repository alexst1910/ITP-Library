//import cover from "../../images/the-mind-of-a-leader-cover.jpg";
import classes from "../BookCard/BookCard.module.css";
import { Link } from "react-router-dom";

const BookCard = (props: {
  id: number;
  title: string;
  price: string;
  author: string;
  cover: string;
}) => {
  return (
    <div className="col-sm-12 col-lg-4 col-xl-3 col-xxl-2">
      <div className={`card ${classes.lora} border-0`}>
        {" "}
        <Link to={`/detail/best/${props.id}`}>
          <div
            className={classes.image}
            style={{
              backgroundImage: `url(${props.cover})`,
            }}
          ></div>
        </Link>
        <div className="card-body p-0">
          <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
            <h5 className="card-title">
              <span className={classes.title}>{props.title}</span>
            </h5>
          </Link>
          <h6 className={`card-subtitle mb-2 text-muted ${classes.gold}`}>
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
