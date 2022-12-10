function calcAp(state, { ap, tier, level }) {
  const heroBaseStat =
    Math.round(ap * state.levelCoef[level - 1]) * state.tierCoef[tier - 1];
  if (state.lunis.length === 0) {
    return { baseAp: heroBaseStat, buffedAp: heroBaseStat };
  }
  let res = 0;
  const luni = { ...state.luniStats, level: state.luniLevel - 1 };
  const basePower = Math.ceil(luni.ap * state.levelCoef[luni.level]);
  state.lunis.sort((a, b) => (a.tier < b.tier ? 1 : -1));

  state.lunis.forEach((v, i) => {
    if (res === 0) {
      res =
        (2 *
          basePower *
          state.tierCoef[v.tier - 1] *
          luni.spell[v.tier - 1] *
          ap) /
        100;
    } else {
      res +=
        (basePower * state.tierCoef[v.tier - 1] * luni.spell[v.tier - 1] * ap) /
        100;
    }
  });
  res += 2 * heroBaseStat * state.luniStats.ap;
  res /= 2 * state.luniStats.ap;
  return { baseAp: heroBaseStat, buffedAp: Math.round(res) };
}

function calcAd(state, { ad, tier, level }) {
  const heroBaseStat =
    Math.round(ad * state.levelCoef[level - 1]) * state.tierCoef[tier - 1];
  if (state.lunis.length === 0) {
    return { baseAd: heroBaseStat, buffedAd: heroBaseStat };
  }
  let res = 0;
  const luni = { ...state.luniStats, level: state.luniLevel - 1 };
  const basePower = Math.ceil(luni.ap * state.levelCoef[luni.level]);
  state.lunis.sort((a, b) => (a.tier < b.tier ? 1 : -1));

  state.lunis.forEach((v, i) => {
    if (res === 0) {
      res =
        (2 *
          basePower *
          state.tierCoef[v.tier - 1] *
          luni.spell[v.tier - 1] *
          ad) /
        100;
    } else {
      res +=
        (basePower * state.tierCoef[v.tier - 1] * luni.spell[v.tier - 1] * ad) /
        100;
    }
  });
  res += 2 * heroBaseStat * state.luniStats.ap;
  res /= 2 * state.luniStats.ap;
  return { baseAd: heroBaseStat, buffedAd: Math.round(res) };
}

const actions = {
  toggleModule({ commit }, id) {
    commit('TOGGLE_MODULE', id);
  },
  addLuni({ commit }) {
    commit('ADD_LUNI');
  },
  removeLuni({ commit }, payload) {
    commit('REMOVE_LUNI', payload);
  },
  duplicateLuni({ commit }, payload) {
    commit('DUPLICATE_LUNI', payload);
  },
  updateLuniTier({ commit }, payload) {
    commit('UPDATE_LUNI_TIER', payload);
  },
  getPower({ state }, payload) {
    const ap = calcAp(state, payload);
    const ad = calcAd(state, payload);
    return { ...ap, ...ad };
  }
};

export { actions };
