<template>
  <div class="module-wrapper">
    <div class="module-title">Carry</div>
    <select v-model="selected">
      <option v-for="i in CarryAvailable" :key="i" :value="i">{{ i }}</option>
    </select>
    <button @click="addCarry">Add</button>
    <div v-for="c in carry" :key="c">
      <div class="carry-wrapper">
        <img class="pic" src="../assets/Mel.png" />
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "",
  components: {},
  data: () => {
    return {
      selected: "Mel",
      carry: ["Mel"],
    };
  },
  computed: {
    ...mapGetters({
      CarryAvailable: "CarryAvailable",
      lunis: "lunis",
    }),
  },
  methods: {
    addCarry() {
      if (!this.carry.includes(this.selected)) this.carry.push(this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.carry-wrapper {
  height: 300px;
  width: 100%;
  border: 2px solid grey;
  border-radius: 5px;
  display: flex;
}
</style>