<template>
  <MainLayout>
      <CountryLabel :info="dayWeather" />
      <DateLabel/>
      <Degrees/>
      <WeatherType/>
  </MainLayout>
</template>
<script>
import MainLayout from '../layouts/MainLayout'
import CountryLabel from '../components/CountryLabel'
import DateLabel from '../components/DateLabel'
import Degrees from '../components/Degrees'
import WeatherType from '../components/WeatherType'
import { FETCH_CITY_WEATHER } from '../helpers/requests'
export default {
  components:{
    MainLayout,
    CountryLabel,
    DateLabel,
    Degrees,
    WeatherType
  },
  data:()=>({
    dayWeather:{}
  }),
  created() {
    this.fetchWeather()
  },
  methods:{
    fetchWeather() {
      FETCH_CITY_WEATHER('London')
      .then(res => {
        this.dayWeather = res
      })
      .catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

