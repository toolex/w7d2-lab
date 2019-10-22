import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      countries: [],
      chosenCountry: null
    },
    computed: {
      totalPopulation: function () {
        return this.countries.reduce((runningTotal, country) => runningTotal + country.population, 0);
      }
    },
    mounted(){
      this.fetchCountries();
    },
    methods: {
      fetchCountries: function () {
        fetch("https://restcountries.eu/rest/v2/all")
        .then((response) => response.json())
        .then((data) => this.countries = data)
      },
      selectCountry: function(event) {
        console.log(event);
        this.chosenCountry = this.countries[event.target.value]
      }
    }
  })
});
