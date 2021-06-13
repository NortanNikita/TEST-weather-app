<template>
  <div id="app" class="text-center">
    <MainLayout>
      <NavBar />
      <Search
        :searchString="searchString"
        @change="changeSearchString($event)"
      />
      <transition name="fade" mode="out-in">
        <router-view :searchString="searchString" />
      </transition>
    </MainLayout>
  </div>
</template>
<script>
import MainLayout from "./layouts/MainLayout";
import Search from "./components/ui/fields/Search";
import NavBar from "./components/ui/NavBar";
export default {
  components: {
    Search,
    NavBar,
    MainLayout,
  },
  data: () => ({
    transitionName: "slide-left",
    searchString: "",
  }),
  methods: {
    changeSearchString(value) {
      this.searchString = value;
    },
  },
};
</script>
