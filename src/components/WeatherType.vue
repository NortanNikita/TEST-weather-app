<template>
    <div class="weather-type">
       <span>{{weatherType}}</span>
    </div>
</template>
<script>
export default {
   props:{
       weatherType: {
           type: String,
           default:''
       }
   }
}
</script>
<style lang="scss" scoped>
.weather-type {
    padding: 10px;
    span {
        font-size: 36px;
        color: #fff;
        font-weight: bold;
        font-style: italic;
    }   
}
</style>
