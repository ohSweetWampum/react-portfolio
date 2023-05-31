import BigSkyLodges from "../images/BigSkyLodges.png";
import ECommerceBackEnd from "../images/E-CommerceBackEnd.png";
import PasswordGenerator from "../images/PasswordGenerator.png";
import SavvyChef from "../images/SavvyChef.png";
import TowneSquare from "../images/TownSquare.png";
import WeatherDashboard from "../images/WeatherDashboard.png";

const projects = [
  {
    id: 1,
    name: "Random Password Generator",
    description:
      "A password generator that can generate random passwords based on criteria that the user has selected",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: PasswordGenerator,
    repo: "https://github.com/ohSweetWampum/password-generator",
    deployedLink: "https://ohsweetwampum.github.io/password-generator/",
  },
  {
    id: 2,
    name: "Weather Dashboard",
    description:
      "App displays the current day's weather as well as the 5-day forecast for a particular city. You can search a city and the weather data will be displayed. ",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "OpenWeather API",
      "Day.js",
    ],
    image: WeatherDashboard,
    repo: "https://github.com/ohSweetWampum/weather-dashboard",
    deployedLink: "https://ohsweetwampum.github.io/weather-dashboard/",
  },
  {
    id: 3,
    name: "E-Commerce Back End",
    description: "This is the back-end of a shopping website ",
    technologies: [
      "Express.js",
      "MySQL2",
      "Sequelize",
      "Dotenv",
      "Insomnia",
      "Node.js",
      "JavaScript",
    ],
    image: ECommerceBackEnd,
    repo: "https://github.com/ohSweetWampum/E-Commerce-Back-End",
    deployedLink:
      "https://drive.google.com/file/d/1Fvk_3knhg5utdPcn7OCdCTom6Aj0RylA/view",
  },
  {
    id: 4,
    name: "Big Sky Lodges",
    description:
      "This hotel booking app, built with Node.js, Express, Sequelize, MySQL, and session management, is a full-stack application which offers a secure and user-friendly interface for managing hotel reservations across multiple branches. It enables users to securely register, login, book rooms, view their reservations on a personalized dashboard, and cancel bookings as needed ",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Sequelize",
      "MySQL2",
      "Handlebars.js",
      "Bcrypt",
      "Dotenv",
      "Express-Session",
      "Bootstrap",
      "Heroku",
      "JawsDB",
      "Day.js",
      "Express-Handlebars",
      "Connect-Session-sequalize",
      "Bootstrap",
    ],
    image: BigSkyLodges,
    repo: "https://github.com/ohSweetWampum/Big-Sky-Lodges",
    deployedLink: "https://big-sky-lodges.herokuapp.com/",
  },
  {
    id: 5,
    name: "Savvy Chef",
    description:
      "Savvy Chef is a web application that helps you find recipes based on the ingredients you have on hand. With its intuitive interface, you can easily search for ingredients and add them to your list. The app then uses a Spoonacular API to suggest recipes that match your ingredient list. You can also filter the recipe results based on food intolerances, dietary restrictions, price sorting, and cuisines. Savvy chef also uses the CocktailDB API to generate delicious and unique cocktails. ",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bulma",
      "APIs",
      "Spoonacular API",
      "CocktailDB API",
    ],
    image: SavvyChef,
    repo: "https://github.com/DidrikLindberg/savvy-chef",
    deployedLink: "https://didriklindberg.github.io/savvy-chef/",
  },
  {
    id: 6,
    name: "TowneSquare",
    description:
      "TownSquare is a social media application designed for user interactivity. It allows users to create profiles, post thoughts, and respond to others' posts. The most important feature of the app is the ability to manage friend connections, you can add or remove friends. Functionality for updating and deleting posts provides users with control over their content. The application utilizes the power of MongoDB's CRUD operations, while Express.js provides the routing. ",
    technologies: [
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "JavaScript",
      "Dotenv",
      "Bootstrap",
      "Heroku",
      "JawsDB",
      "Insomnia",
      "Day.js",
    ],
    image: TowneSquare,
    repo: " https://github.com/ohSweetWampum/TownSquare",
    deployedLink:
      " https://drive.google.com/file/d/1Ext6K_odyTyfKsVvN2OWercw-vLhbpZu/view",
  },
];

export default projects;
