<template>
  <div class="about">
    <propertyHeader />
    <properyList />
  </div>
</template>
<script>
import propertyHeader from "@/components/property/header";
import properyList from "@/components/property/list";
export default {
  components: {
    propertyHeader,
    properyList
  }
};
</script>
