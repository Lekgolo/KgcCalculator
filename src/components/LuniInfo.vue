<template>
  <table class="info-wrapper wrapper">
    <div class="name-wrapper">
      <span class="tier">Tier</span>
      <span class="tier">SP/AD</span>
      <span class="tier">Bonus</span>
      <span class="tier">Cost</span>
    </div>
    <tbody>
      <div class="info" v-for="i in 7" :key="i">
        <span class="tier tier-name">{{ i }}</span>
        <span class="tier tier-sp">{{ sp[i - 1] }}</span>
        <span class="tier tier-bonus">{{ bonus[i - 1] }}%</span>
        <span class="tier tier-cost">{{ cost[i - 1] }}</span>
      </div>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "LuniInfo",
  data: function () {
    return {
      sp: [88, 141, 230, 318, 425, 531, 619],
      bonus: [100.0, 100.0, 115.0, 115.0, 130.0, 130.0, 150.0],
      cost: [3, 6, 12, 24, 48, 96, 192],
    };
  },
};
</script>

<style scoped>
.info-wrapper {
  display: flex;
  flex-direction: column;
}
.info {
  display: flex;
}
.info:not(:last-child) {
  margin-bottom: 5px;
}
.name-wrapper {
  display: flex;
}
.tier {
  flex: 1;
  align-items: center;
}
</style>