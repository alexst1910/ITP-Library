// import CarouselItemData from "../../interfaces/carouselItemData";
import classes from "../CarouselItem/CarouselItem.module.css";
const CarouselItem = (props: {
  title: string;
  description: string;
  cover: string;
}) => {
  return (
    <div
      className={`container w-100 ${classes.item} col-sm-12 col-md-6 col-lg-3`}
    >
      <div className="row w-100">
        <div className={`col ${classes.text} mx-5`}>
          <h1>{props.title}</h1>
          <p className={classes.description}>{props.description}</p>
        </div>
        <div className="col">
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${props.cover})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
