<template>
    <div class="weather-type">
       <span>{{type}}</span>
    </div>
</template>
<script>
export default {
    data:()=>({
        type:'Clouds'
    })
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
