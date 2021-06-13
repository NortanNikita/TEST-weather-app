<template>
  <div class="location d-flex text-center justify-content-center">
    <span>{{ info.name}}, {{info && info.sys && info.sys.country}}</span>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
.location {
  font-weight: bold;
  color: var(--textColor);
  font-size: 26px;
  padding:10px 0;
}
</style>
