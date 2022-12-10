<template>
  <div class="gold-wrapper wrapper">
    <div class="gold-expand">
      Expand {{ totalLuni }} times for {{ totalLuni * 20 }} gold
    </div>
    <div class="gold-unit">Unit cost: {{ unitcost }}</div>
    <div class="total-gold">
      Total gold spent: {{ totalLuni * 20 + unitcost }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Gold",
  props: ["totalLuni", "unitcost"],
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.gold-wrapper {
  width: 90%;
}
td {
  padding: 5px 10px;
  margin: 0;
  border: 2px solid black;
}
</style>