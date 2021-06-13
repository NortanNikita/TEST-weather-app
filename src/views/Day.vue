<template>
  <div class="page">
    <div v-if="hasDayWeather">
    <LocationLabel :info="dayWeather" />
    <DateLabel :date="dayWeather && dayWeather.dt" />
    <Degrees :degrees="dayWeather && dayWeather.main && dayWeather.main.temp" />
    <WeatherType
      :weatherType="
        dayWeather &&
        dayWeather.weather &&
        dayWeather.weather.length &&
        dayWeather.weather[0].main
      "
    />
    </div>
    <NoDataMessage v-if="!searchString"/>
    <ErrorMessage v-if="error" :errorMessage="error" />
  </div>
</template>
<script>
import NoDataMessage from "../components/NoDataMessage";
import ErrorMessage from "../components/ErrorMessage";
import LocationLabel from "../components/LocationLabel";
import DateLabel from "../components/DateLabel";
import Degrees from "../components/Degrees";
import WeatherType from "../components/WeatherType";
import { FETCH_CITY_WEATHER } from "../helpers/requests";
export default {
  components: {
    LocationLabel,
    DateLabel,
    Degrees,
    WeatherType,
    ErrorMessage,
    NoDataMessage
  },
  props: ["searchString"],
  data: () => ({
    dayWeather: {},
    error: "",
  }),
  created() {
    if(this.searchString) {
      this.fetchWeather(this.searchString);
    }
  },
  methods: {
    fetchWeather(searchString) {
      this.error = "";
      FETCH_CITY_WEATHER(searchString)
        .then((res) => {
          this.dayWeather = res;
        })
        .catch((err) => {
          this.error = err.message;
          console.error(err);
          this.dayWeather = {};
        });
    },
  },
  computed:{
    hasDayWeather() {
     return Object.keys(this.dayWeather).length > 0
    }
  },
  watch: {
    searchString(val) {
      if(val){
       this.fetchWeather(val);
        this.error = "";
      }
      else {
        this.error = "";
        this.dayWeather = {}
      }
    },
  },
};
</script>

