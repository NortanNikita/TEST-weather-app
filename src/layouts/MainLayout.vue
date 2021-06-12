<template> 
<div class="main-layout">
    <NavBar/>
    <slot/>
</div>
</template>
<script>
import NavBar from '../components/ui/NavBar'
export default {
    components:{
        NavBar
    }
}
</script>
<style lang="scss" scoped>
    .main-layout {
        width:100%;
        height: 100%;
        min-height: 100vh;
        background:url('../assets/images/bg.jpg');
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>