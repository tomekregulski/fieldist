import axios from "axios";
import Userfront from "@userfront/react";
Userfront.init("demo1234");

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRegions: function() {
    // return axios.get("http://localhost:8080/api/regions");
    return axios.get("/api/regions");
  },

  getDemos: function() {
    // return axios.get("http://localhost:8080/api/demos");
    return axios.get("/api/demos", {
  headers: {
    'Authorization': `Bearer ${Userfront.accessToken()}`,
    },
});
  },

  getBrands: function() {
    // return axios.get("http://localhost:8080/api/regions");
    return axios.get("/api/brands");
  },
  getCampaigns: function() {
    // return axios.get("http://localhost:8080/api/regions");
    return axios.get("/api/campaigns");
  },
  getReps: function() {
    // return axios.get("http://localhost:8080/api/regions");
    return axios.get("/api/users/reps");
  },
  getVenues: function() {
    // return axios.get("http://localhost:8080/api/regions");
    return axios.get("/api/venues");
  },
  getAudits: function() {
    // return axios.get("http://localhost:8080/api/regions");
    return axios.get("/api/audits");
  },
  // getReportTemplates: function() {
  //   // return axios.get("http://localhost:8080/api/regions");
  //   return axios.get("/api/brands");
  // },
};