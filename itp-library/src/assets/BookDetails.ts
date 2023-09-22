import Book from "../interfaces/book";
import cover_1 from "../images/the-mind-of-a-leader-cover.jpg";
import cover_2 from "../images/lunar-storm.jpg";
import cover_3 from "../images/normal-people.jpg";
import cover_4 from "../images/Sin-Eater-by-Megan-Campisi.jpg";
import cover_5 from "../images/educated.jpg";
import cover_6 from "../images/the-hypocrite-world.jpg";
import cover_7 from "../images/lifting-orbits.jpg";
import cover_8 from "../images/stand-out.jpg";
import cover_9 from "../images/story-craft.jpg";
import cover_10 from "../images/tess-cover.jpg";
import cover_11 from "../images/the-black-woods.jpg";
import cover_12 from "../images/annihilation_cover.jpg";

export const BestBooks: Book[] = [
  {
    id: 1,
    title: "The mind of a leader",
    price: "$90",
    author: "Kevin Anderson",
    cover: cover_1,
  },
  {
    id: 2,
    title: "Lunar Storm",
    price: "$60",
    author: "Terry Crosby",
    cover: cover_2,
  },
  {
    id: 3,
    title: "Normal People",
    price: "$75",
    author: "Sally Rooney",
    cover: cover_3,
  },
  {
    id: 4,
    title: "Sin Eater",
    price: "$50",
    author: "Megan Campisi",
    cover: cover_4,
  },
  {
    id: 5,
    title: "Educated",
    price: "$70",
    author: "Tara Westover",
    cover: cover_5,
  },
  {
    id: 6,
    title: "The hypocrite world",
    price: "$55",
    author: "Sophia Hill",
    cover: cover_6,
  },
];

export const RecentBooks: Book[] = [
  {
    id: 7,
    title: "Lifting Orbits",
    price: "$45",
    author: "Carissa Pacheco",
    cover: cover_7,
  },
  {
    id: 8,
    title: "Stand Out",
    price: "$63",
    author: "John Lemon",
    cover: cover_8,
  },

  {
    id: 9,
    title: "Story Craft",
    price: "$53",
    author: "Jack Hart",
    cover: cover_9,
  },
  {
    id: 10,
    title: "Tess Of The Road",
    price: "$68",
    author: "Rachel Hartman",
    cover: cover_10,
  },
  {
    id: 11,
    title: "The Black Woods",
    price: "$76",
    author: "William Wallburgh",
    cover: cover_11,
  },
  {
    id: 12,
    title: "Annihilation",
    price: "$77",
    author: "Jeff Vandermeer",
    cover: cover_12,
  },
];
export const SectionOne: string = "Best books of the month";
export const SectionTwo: string = "Recently added";
