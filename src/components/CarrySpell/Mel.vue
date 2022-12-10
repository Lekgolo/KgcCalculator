<template>
  <img class="pic" src="../../assets/Mel.png" />
  <div class="select-wrapper">
    <select v-model="tier" @change="updatePower">
      <option v-for="i in 7" :key="i" :value="i">Tier {{ i }}</option>
    </select>
    <select v-model="level" @change="updatePower">
      <option v-for="i in 20" :key="i" :value="i">Level {{ i }}</option>
    </select>
  </div>
  <div class="info-wrapper">
    <div class="info-section">
      <div class="info-section-title">No buff, no spell</div>
      <div>Attack {{ baseAd }}</div>
      <div>Spell {{ baseAp }}</div>
    </div>
    <div class="info-section">
      <div class="info-section-title">No buff, spell</div>
      <div>Attack {{}}</div>
      <div>Spell {{}}</div>
    </div>
    <div class="info-section">
      <div class="info-section-title">Buff, no spell</div>
      <div>Attack {{ adBuffed }}</div>
      <div>Spell {{ apBuffed }}</div>
    </div>
    <div class="info-section">
      <div class="info-section-title">Buff and spell</div>
      <div>Attack {{}}</div>
      <div>Spell {{}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "",
  data: () => {
    return {
      tier: 7,
      level: 20,
      ap: 50,
      ad: 30,
      health: 220,
      as: 0.83,
      baseAp: 0,
      baseAd: 0,
      apBuffed: 0,
      adBuffed: 0,
    };
  },
  watch: {
    lunis: {
      handler: function () {
        this.updatePower();
      },
      deep: true,
    },
  },
  created() {
    this.updatePower();
  },
  computed: {
    ...mapGetters({
      lunis: "lunis",
    }),
  },
  methods: {
    async updatePower() {
      const { baseAd, buffedAd, baseAp, buffedAp } = await this.$store.dispatch(
        "getPower",
        {
          ap: this.ap,
          ad: this.ad,
          tier: this.tier,
          level: this.level,
        }
      );
      console.log({ baseAd, buffedAd, baseAp, buffedAp });

      this.baseAp = baseAp;
      this.baseAd = baseAd;
      this.apBuffed = buffedAp;
      this.adBuffed = buffedAd;
    },
  },
};
</script>

<style lang="scss" scoped>
.pic {
  width: 20%;
  object-fit: contain;
}
.info-wrapper {
  border: 2px solid grey;
  border-radius: 5px;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
}
.info-section {
  border: 1px solid grey;
  border-radius: 5px;
  width: calc(50% - 13px);
  height: calc(50% - 13px);
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>