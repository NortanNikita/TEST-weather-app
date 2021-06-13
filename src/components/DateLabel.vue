<template>
  <div class="date">
   <span>{{ convertedDate }}</span>
  </div>
</template>
<script>
import convertDate from "../helpers/convertDate";
export default {
  props: {
    date: {
      type: Number,
      default: null,
    },
  },
  computed: {
    convertedDate() {
      return convertDate(this.date);
    },
  },
};
</script>
<style lang="scss" scoped>
.date {
  font-size: var(--fontSize);
  color: var(--textColor);
  font-style: italic;
  padding:10px 0;
}
</style>
