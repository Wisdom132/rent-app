<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>
<script>
import navbar from "@/partials/navbar";
export default {
  components: {
    navbar
  }
};
</script>
<style>
* {
  font-family: "Quicksand", sans-serif;
}
</style>

