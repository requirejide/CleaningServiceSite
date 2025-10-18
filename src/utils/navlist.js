import cleaner_1 from "../assets/cleaner_1.jpg";
import cleaner_2 from "../assets/cleaner_2.jpg";

export const list = [
  { id: 0, title: "Home", dropDown: "" },
  {
    id: 1,
    title: "Our Services",
    dropDown: ["Home Cleaning", "Ironing", "Commercial Office Cleaning"],
  },
  { id: 2, title: "Branch", dropDown: "" },
  { id: 3, title: "Franchise", dropDown: "" },
  { id: 4, title: "About Us", dropDown: "" },
  { id: 5, title: "Contact", dropDown: "" },
];

export const hero_words = [
  {
    top: " One of Uk largest and fastest growing Cleaning Services",
    middle: "We Poppin, so you can pop out",
    btn: ["Book online", " Find Branch", "Send an Enquiry"],
    image: cleaner_1,
  },
  {
    top: "We Poppin, so you can pop out",
    middle: "Get pro cleaning from reliable specialist for your home",
    btn: ["Book online", " Find Branch", "Send an Enquiry"],
    image: cleaner_2,
  },
];
