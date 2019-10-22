import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      countries: [
        {name: "Albania", population: 2886026, flag: "https://restcountries.eu/data/alb.svg"}
      ]
    }
  })
});
