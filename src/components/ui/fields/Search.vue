<template>
  <div class="search">
    <input
      :value="searchString"
      :placeholder="placeholder"
      @input="changeValue($event)"
    />
  </div>
</template>
<script>
import { debounce } from "debounce";
export default {
  props: {
    searchString: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: 'Enter for example "Nigeria"',
    },
  },
  methods: {
    changeValue: debounce(function (event) {
      this.$emit("change", event.target.value);
    }, 250),
  },
};
</script>
<style lang="scss" scoped>
.search {
  position: absolute;
  top: 12px;
  left: 150px;
  & > input {
    background: rgba(255, 255, 255, 0.5);
    border: none;
    height: 40px;
    width: 270px;
    border-radius: 10px;
    outline: none;
    color: var(--textColor);
    font-size: var(--fontSize);
    padding: 10px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
