<template>
  <Header sitename="Homes" />
  <HomeDetail />
  <HomeList />
</template>

<script>
import Header from "@/components/Header.vue";
import HomeDetail from "@/components/HomeDetail.vue";
import HomeList from "@/components/HomeList.vue";

export default {
  name: "HomeRent",
  components: {
    Header,
    HomeDetail,
    HomeList,
  },
  props: {},
};
</script>

<style>
</style>