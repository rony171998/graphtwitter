// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Principal",
  },
  {
    icon: UilPackage,
    heading: 'Animales'
  },
  {
    icon: UilClipboardAlt,
    heading: "Ventas",
  },
  {
    icon: UilUsersAlt,
    heading: "Clientes",
  },
  
  
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Ventas",
    color: {
      backGround:  "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 90,
    value: "$ 25,970,000",
    png: UilUsdSquare,
    series: [
      {
        name: "Ventas",
        data: [31, 40, 28, 51, 42, 109, 100,110,5,50,200],
      },
    ],
  },
  {
    title: "Ventas",
    color: {
      backGround:  "#00D2FC",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 590,
    value: "$ 25,970,000",
    png: UilUsdSquare,
    series: [
      {
        name: "Ventas",
        data: [31, 40, 28, 51, 42, 109, 100,110,5,50,200],
      },
    ],
  },
  

];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "ha comprado 10 cerdos.",
    time: "hace 1 mes",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "ha comprado 2 vacas.",
    time: "hace 2 meses",
  },
  {
    img: img3,
    name: "Iron Girl",
    noti: "ha comprado 50 gallinas.",
    time: "hace 2 meses",
  },
  
];
