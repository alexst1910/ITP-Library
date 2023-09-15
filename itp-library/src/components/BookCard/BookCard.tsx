//import cover from "../../images/the-mind-of-a-leader-cover.jpg";
import classes from "../BookCard/BookCard.module.css";

const BookCard = (props: {
  title: string;
  price: string;
  author: string;
  cover: string;
}) => {
  return (
    <div className={`card ${classes.lora} border-0 me-3`}>
      {/*<img
        className={`card-img-top rounded-0 mb-3`}
        alt=""
        src={props.cover}
        style={{ width: "13rem", height: "20rem" }}
  />*/}
      <div
        style={{
          width: "100%",
          height: "350px",
          backgroundImage: `url(${props.cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "2rem",
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
        <button className="btn btn-dark w-100 mb-4">
          <span className={classes.buttontext}>Add to cart</span>
        </button>
      </div>
    </div>
  );
};
export default BookCard;
