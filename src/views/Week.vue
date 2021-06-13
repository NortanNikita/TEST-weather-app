<template>
  <div class="page">
    <div v-if="week.length">
      <LocationLabel :info="location" />
      <div class="week-row d-flex f-wrap align-center justify-content-center">
        <div class="week-row__item" v-for="(day, index) in week" :key="index">
          <DateLabel :date="day && day.dt" />
          <Degrees :degrees="day && day.temp && day.temp.day" />
          <WeatherType
            :weatherType="
              day && day.weather && day.weather.length && day.weather[0].main
            "
          />
        </div>
      </div>
    </div>
    <NoDataMessage v-if="!searchString" />
    <ErrorMessage v-if="error" :errorMessage="error" />
  </div>
</template>
<script>
import {
  FETCH_CITY_WEATHER_WEEK,
  FETCH_CITY_WEATHER,
} from "../helpers/requests";
import LocationLabel from "../components/LocationLabel";
import DateLabel from "../components/DateLabel";
import Degrees from "../components/Degrees";
import WeatherType from "../components/WeatherType";
import NoDataMessage from "../components/NoDataMessage";
import ErrorMessage from "../components/ErrorMessage";
export default {
  components: {
    LocationLabel,
    DateLabel,
    WeatherType,
    NoDataMessage,
    ErrorMessage,
    Degrees,
  },
  props: ["searchString"],
  data: () => ({
    location: {},
    week: [],
    error: "",
  }),
  created() {
    if (this.searchString) {
      this.fetchWeather();
    }
  },
  methods: {
    fetchWeather() {
      this.error = "";
      FETCH_CITY_WEATHER(this.searchString)
        .then((res) => {
          this.location = { name: res.name, sys: res.sys };
          FETCH_CITY_WEATHER_WEEK({ ...res.coord })
            .then((res) => {
              this.week = res.daily.filter(
                (item, i) => i != res.daily.length - 1
              );
            })
            .catch((err) => {
              this.location = {};
              this.week = [];
              console.error(err);
              this.error = err.message;
            });
        })
        .catch((err) => {
          this.location = {};
          this.week = [];
          console.error(err);
          this.error = err.message;
        });
    },
  },
  watch: {
    searchString(val) {
      if (val) {
        this.fetchWeather(val);
        this.error = "";
      } else {
        this.location = {};
        this.week = [];
        this.error = "";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.week-row {
  width: 100%;
  &__item {
    padding: 0 10px;
  }
}
</style>

