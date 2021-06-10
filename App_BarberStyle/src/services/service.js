import axios from "axios";

export default axios.create({
baseURL: "https://607a5bfdbd56a60017ba29de.mockapi.io/api/appBarberStyle/",
headers: {
    "Content-type": "application/json"
  }
});


