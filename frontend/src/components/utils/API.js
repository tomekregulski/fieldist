import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRegions: function() {
    // return axios.get("http://localhost:8080/api/regions");
    return axios.get("/api/regions");
  },

  getDemos: function() {
    // return axios.get("http://localhost:8080/api/demos");
    return axios.get("/api/demos");
  },
};