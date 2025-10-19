import cleaner_1 from "../assets/cleaner_1.jpg";
import cleaner_2 from "../assets/cleaner_2.jpg";

export const list = [
  { id: 0, title: "Home", dropDown: "", link: "/" },
  {
    id: 1,
    title: "Our Services",
    dropDown: ["Home Cleaning", "Ironing", "Commercial Office Cleaning"],
    link: "/",
  },
  { id: 2, title: "Branch", dropDown: "", link: "/" },
  { id: 3, title: "Franchise", dropDown: "", link: "/" },
  { id: 4, title: "About Us", dropDown: "", link: "/" },
  { id: 5, title: "Contact", dropDown: "", link: "/enquiry" },
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
