# Weather Scraping Application

This is a full-stack MERN project that scrapes weather data and stores it in a MongoDB database. The app collects weather forecasts, processes the data, and displays it in a user-friendly interface. It utilizes web scraping techniques to gather weather information from a forecast website.

![MERN Stack](https://img.shields.io/badge/MERN-Stack-4CAF50)

---

## 🖥️ Technologies Used

### Backend

- **Node.js** - JavaScript runtime for building the server-side of the application.
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

- **Express.js** - Web framework for building the REST API to serve weather data.
  ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

- **MongoDB** - NoSQL database to store scraped weather data.
  ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

- **Mongoose** - MongoDB object modeling tool to interact with the database.
  ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

- **Axios** - Promise-based HTTP client for making API requests and scraping weather data from websites.
  ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

- **Cheerio** - Fast, flexible, and lean implementation of jQuery for the server, used to scrape the weather website.
  ![Cheerio](https://img.shields.io/badge/Cheerio-CA0000?style=for-the-badge&logo=cheerio&logoColor=white)

### Frontend

- **React.js** - JavaScript library for building the user interface to display the weather data.
  ![React.js](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

- **Material-UI** - A React component library to create a beautiful and responsive UI.
  ![Material-UI](https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=material-ui&logoColor=white)

- **Axios (Frontend)** - Used to fetch weather data from the backend API.
  ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

---

## 📊 How It Works

1. **Scraping Weather Data**  
   - The backend uses **Cheerio** and **Axios** to scrape weather forecast data from a weather website.
   - The data contains information like date, temperature, and weather conditions for each day.
   
2. **Storing Data in MongoDB**  
   - The scraped data is stored in a **MongoDB** database using **Mongoose**.
   - The data includes maximum and minimum temperatures, as well as the weather conditions (e.g., "Sunny", "Rainy").
   
3. **Displaying Data with React**  
   - The **React** frontend fetches the weather data via an API created with **Express.js**.
   - Weather data is displayed in a clean and simple interface using **Material-UI** components.

---

## 🔧 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/weather-scraping-app.git
cd weather-scraping-app
