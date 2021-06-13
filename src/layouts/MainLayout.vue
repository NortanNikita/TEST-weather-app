<template>
  <div class="main-layout d-flex flex-column align-center">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.main-layout {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: url("../assets/images/bg3.png");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
</style>