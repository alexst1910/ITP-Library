import BookList from "../components/BookList/BookList";
import { carouselData } from "../assets/CarouselItemDetalis";
import {
  BestBooks,
  SectionOne,
  RecentBooks,
  SectionTwo,
} from "../assets/BookDetails";
import Carousel from "../components/Carousel/Carousel";
import React from "react";
const HomePage: React.FC = () => {
  return (
    <div className="container">
      <Carousel items={carouselData} />
      <BookList cards={BestBooks} section={SectionOne} />
      <BookList cards={RecentBooks} section={SectionTwo} />
    </div>
  );
};
export default HomePage;
