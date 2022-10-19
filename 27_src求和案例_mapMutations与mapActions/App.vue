<template>
  <div>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count.vue";
export default {
  components: { Count },
  name: "App",
  mounted() {
    console.log("App", this);
  },
};
</script>

 <style lang="css">
</style>

