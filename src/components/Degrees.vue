<template>
    <div class="degrees">
       <span>{{degrees}}</span>
    </div>
</template>
<script>
export default {
    data:()=>({
        degrees:'27°C'
    })
}
</script>
<style lang="scss" scoped>
.degrees {
    padding: 10px;
    border-radius: 10px;
    background: rgba(255,255,255,0.5);
    span {
        font-size: 48px;
        color: #fff;
        font-weight: bold;
    }   
}
</style>
