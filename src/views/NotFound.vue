<template>
<div class="not-found-page page flex-column">
    <h1>404</h1>
    <p>Page not found</p>
    <router-link to='/'>Back to weather app</router-link>
</div>    
</template>
<style lang="scss" scoped>
.not-found-page {
    position: absolute;
    z-index: 100;
    height: 100vh;
    top:0;
    left: 0;
    background:white;
}
</style>
