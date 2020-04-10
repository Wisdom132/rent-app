<template>
  <div>
    <appHeader />
    <steps />
    <landlord />
  </div>
</template>

<script>
// @ is an alias to /src
import appHeader from "@/components/home/header.vue";
import steps from "@/components/home/steps.vue";
import landlord from "@/components/home/landlord.vue";

export default {
  name: "Home",
  components: {
    appHeader,
    steps,
    landlord
  }
};
</script>
