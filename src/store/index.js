import Vuex from 'vuex';
import { actions } from './actions.js';
import { getters } from './getters.js';
import { staticValues } from './StaticValues.js';

// State object
const state = {
  ...staticValues,
  modules: {
    luniare: {
      name: 'Luniare',
      active: true
    },
    carry: {
      name: 'Carry',
      active: true
    }
  },
  luniLevel: 20,
  /* Luni: {
    tier: (1 to 7),
    ap: Number,
    ad: Number,
    items: [item]
  } 
  item: {
    type: itemTypes,
    affix: 0 (WIP)
    tier: (1 to 4)
  }
  */
  lunis: []
  /*
  Carry: {
    Name: CarryAvailable
    tier: (1 to 7),
  }
  */
};

// Mutations
const mutations = {
  TOGGLE_MODULE(state, id) {
    state.modules[id].active = !state.modules[id].active;
  },
  ADD_LUNI(state, payload) {
    state.lunis.push({
      tier: 7,
      ap: Math.ceil(
        Math.ceil(state.luniStats.ap * state.levelCoef[state.luniLevel - 1]) *
          state.tierCoef[6]
      ),
      ad: Math.ceil(
        Math.ceil(state.luniStats.ad * state.levelCoef[state.luniLevel - 1]) *
          state.tierCoef[6]
      ),
      items: []
    });
  },
  REMOVE_LUNI(state, payload) {
    state.lunis.splice(payload, 1);
  },
  DUPLICATE_LUNI(state, payload) {
    state.lunis.push(state.lunis[payload]);
  },
  UPDATE_LUNI_TIER(state, payload) {
    state.lunis[payload.idx] = {
      ...state.lunis[payload.idx],
      tier: payload.tier,
      ap: Math.ceil(
        Math.ceil(state.luniStats.ap * state.levelCoef[state.luniLevel - 1]) *
          state.tierCoef[payload.tier - 1]
      ),
      ad: Math.ceil(
        Math.ceil(state.luniStats.ad * state.levelCoef[state.luniLevel - 1]) *
          state.tierCoef[payload.tier - 1]
      )
    };
  },
  UPDATE_POWER(state) {}
};

// Creating Store
export default new Vuex.Store({
  namespaced: true,
  state,
  actions,
  mutations,
  getters
});
