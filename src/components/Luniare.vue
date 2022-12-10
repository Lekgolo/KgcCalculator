<template>
  <div class="module-wrapper">
    <div class="module-title">Luniare</div>
    <div class="select-wrapper">
      <div class="luni-wrapper" v-for="i in 8" :key="i">
        <template v-if="lunis[i - 1]">
          <div>{{ lunis[i - 1].tier }}</div>
          <img class="pic" src="../assets/Luniare.png" />
          <div>Attack: {{ lunis[i - 1].ad }}</div>
          <div>Spell: {{ lunis[i - 1].ap }}</div>
          <select v-model="lunis[i - 1].tier" @change="updateLuniTier(i - 1)">
            <option v-for="i in 7" :key="i" :value="i">Tier {{ i }}</option>
          </select>
          <button @click="removeLuni(i - 1)">Remove</button>
          <button @click="duplicateLuni(i - 1)">Duplicate</button>
        </template>
        <template v-if="lunis.length === i - 1">
          <button @click="addLuni">Add</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Luniare",
  data: () => {
    return {};
  },
  watcher: {
    lunis() {
      console.log("hey");
    },
  },
  computed: {
    ...mapGetters({
      lunis: "lunis",
    }),
  },
  created() {
    this.$store.dispatch("updatePower");
  },
  methods: {
    addLuni() {
      this.$store.dispatch("addLuni");
    },
    removeLuni(idx) {
      this.$store.dispatch("removeLuni", idx);
    },
    duplicateLuni(idx) {
      this.$store.dispatch("duplicateLuni", idx);
    },
    updateLuniTier(idx) {
      this.$store.dispatch("updateLuniTier", {
        idx,
        tier: this.lunis[idx].tier,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  display: flex;
}
.luni-wrapper {
  height: 400px;
  width: 12.5%;
  border: 2px solid grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.pic {
  width: 100px;
  object-fit: contain;
}
.luni-wrapper:not(last-child) {
  margin-right: 5px;
}
</style>
