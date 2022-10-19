<template>
  <div>
    <Count />
    <br />
    <Person />
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";

export default {
  components: { Count, Person },
  name: "App",
  mounted() {
    console.log("App", this);
  },
};
</script>

 <style lang="css">
</style>

