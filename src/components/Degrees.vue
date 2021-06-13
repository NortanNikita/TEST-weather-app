<template>
  <div class="degrees">
    <span>{{ convertedTemp }}</span>
  </div>
</template>
<script>
import convertTemp from "../helpers/convertTemp";
export default {
  props: {
    degrees: {
      type: Number,
      default: null,
    },
  },
  computed: {
    convertedTemp() {
      return convertTemp(this.degrees);
    },
  },
};
</script>
<style lang="scss" scoped>
.degrees {
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  span {
    font-size: 48px;
    color: var(--textColor);
    font-weight: bold;
  }
}
</style>
