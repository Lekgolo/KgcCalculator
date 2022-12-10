<template>
  <div id="app">
    <ModuleSelect />
    <div class="modules-wrapper">
      <Luniare v-if="modules['luniare'].active" />
      <Carry v-if="modules['carry'].active" />
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import ModuleSelect from "./components/ModuleSelect.vue";
import Luniare from "./components/Luniare.vue";
import Carry from "./components/Carry.vue";

import Calculation from "./components/Calculation.vue";
import Gold from "./components/Gold.vue";
import LuniInfo from "./components/LuniInfo.vue";

export default {
  components: {
    ModuleSelect,
    Luniare,
    Carry,
    Calculation,
    Gold,
    LuniInfo,
  },
  data: function () {
    return {
      tier: [
        { v: 0 },
        { v: 0 },
        { v: 0 },
        { v: 0 },
        { v: 0 },
        { v: 2 },
        { v: 1 },
      ],
      desc: "0",
      sp: [88, 141, 230, 318, 425, 531, 619],
      bonus: [100.0, 100.0, 115.0, 115.0, 130.0, 130.0, 150.0],
      cost: [3, 6, 12, 24, 48, 96, 192],
    };
  },
  computed: {
    ...mapGetters({
      modules: "modules",
    }),
    totalLuni() {
      return this.tier.reduce((acc, t) => acc + t.v, 0);
    },
    unitcost() {
      let cost = 0;
      this.tier.forEach((t, i) => {
        if (t.v === 0) return;
        cost += t.v * this.cost[i];
      });
      return cost;
    },
    ratio() {
      let cost = this.totalLuni * 20 + this.unitcost;
      if (cost === 0) return 0;
      return (this.res / cost).toPrecision(5);
    },
    res() {
      const arr = this.tier.map((t) => t.v).reverse();
      let res = 0;
      arr.forEach((v, i) => {
        let t = 6 - i;
        if (v === 0) return;
        if (res === 0) {
          res += this.sp[t] * (this.bonus[t] / 100).toPrecision(3);
          this.desc = `(${this.sp[t]} * ${(this.bonus[t] / 100).toPrecision(
            3
          )})`;
          v -= 1;
          if (v !== 0) this.desc += " + ";
        } else {
          this.desc += " + ";
        }
        if (v === 0) return;
        res += v * this.sp[t] * (this.bonus[t] / 200).toPrecision(3);
        this.desc += "(";
        if (v > 1) this.desc += `${v} * `;
        this.desc += `${this.sp[t]} * ${(this.bonus[t] / 100).toPrecision(
          3
        )} * 0.5)`;
      });
      return res;
    },
  },
  methods: {
    reset() {
      this.tier = [
        { v: 0 },
        { v: 0 },
        { v: 0 },
        { v: 0 },
        { v: 0 },
        { v: 0 },
        { v: 0 },
      ];
      this.desc = "0";
    },
  },
};
</script>
