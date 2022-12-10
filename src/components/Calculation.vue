<template>
  <div class="calcul-wrapper wrapper">
    <div class="calcul-result">
      <div class="res-name">Result</div>
      <div class="res-value">{{ res ? res.toPrecision(6) : 0 }}</div>
    </div>
    <div class="calcul-description">
      <div class="desc-name">Description</div>
      <div class="desc-value">{{ desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculation",
  props: ["res", "desc"],
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>