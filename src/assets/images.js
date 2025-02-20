import shop from "./mini-img/shop.png";
import books from "./mini-img/books.png";
import otherArtist from "./mini-img/other-artist.png";
import statusUpdate from "./mini-img/status-update.png";

import bt from "./thumbnails/bt.jpg";
import idnadl from "./thumbnails/idnadl.jpg";
import ump from "./thumbnails/ump.png";

import draw from "./contact-img/draw.png";
import milk from "./contact-img/milk.png";
import music from "./contact-img/music.png";
import RF from "./contact-img/RF.svg";

const miniImages = [
  { src: statusUpdate, alt: "Status Update" },
  { src: shop, alt: "Shop" },
  { src: books, alt: "Books" },
  { src: otherArtist, alt: "Other Artists" },
  // Add more images here...
];

const thumbnails = [
  {
    src: bt,
    alt: "Bad things",
    link: "https://youtu.be/NV-Gzl-DfFM?si=NjqtZvlWN6vuECyP",
  },
  {
    src: idnadl,
    alt: "I do nothing all day long",
    link: "https://youtu.be/-mvIHNAE6H0?si=gd0Ny9ulXcTvNh69",
  },
  {
    src: ump,
    alt: "Under my Parasol",
    link: "https://youtu.be/ZkXCM0JI8-M?si=rJwCRLwCkfNDLTCQ",
  },
];

const contactImg=[
  { src: draw, alt: "draw logo"},
  { src: milk, alt: "milk logo"},
  { src: music, alt: "music logo"},
  { src: RF, alt: "RF logo"},
];
export { miniImages, thumbnails, contactImg };
