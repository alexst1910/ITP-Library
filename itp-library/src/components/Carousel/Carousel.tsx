import landscape_1 from "../../images/landscape-1.jpg";
import landscape_2 from "../../images/landscape-2.jpg";
import landscape_3 from "../../images/landscape-3.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={landscape_1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={landscape_2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={landscape_3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
