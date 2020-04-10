<template>
  <div>
    <appHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import appHeader from "@/components/home/header.vue";

export default {
  name: "Home",
  components: {
    appHeader
  }
};
</script>
