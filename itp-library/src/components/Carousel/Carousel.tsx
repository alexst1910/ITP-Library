import CarouselItemData from "../../interfaces/carouselItemData";
import CarouselItem from "../CarouselItem/CarouselItem";

const Carousel = (props: { items: CarouselItemData[] }) => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide d-none d-lg-block"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        {props.items.map((item, index) => {
          return (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current="true"
              aria-label={`Slide ${index}`}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        {props.items.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <CarouselItem
                title={item.title}
                description={item.description}
                cover={item.cover}
              />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      ></button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      ></button>
    </div>
  );
};

export default Carousel;
