const staticValues = {
  levelCoef: [
    1,
    1.2,
    1.4,
    1.9,
    2.1,
    2.3,
    2.5,
    3,
    3.2,
    3.4,
    3.6,
    3.8,
    4,
    4.2,
    4.4,
    4.7,
    5,
    5.3,
    5.6,
    5.9
  ],
  tierCoef: [1, 1.6, 2.6, 3.6, 4.8, 6, 7],
  luniStats: {
    ap: 15,
    ad: 15,
    health: 150,
    as: 1,
    spell: [100.0, 100.0, 115.0, 115.0, 130.0, 130.0, 150.0]
    // zuoYun: {
    //   ap: 10,
    //   ad: 20,
    //   health: 180,
    //   as: 1.25
    // }
  },
  cost: [3, 6, 12, 24, 48, 96, 192],
  itemTypes: {
    staff: 'staff',
    sword: 'sword',
    bow: 'bow'
  },
  ItemBuff: {
    staff: [40, 70, 120, 200],
    sword: [25, 40, 70, 120],
    bow: [25, 40, 70, 120]
  },
  CarryAvailable: {
    mel: 'Mel'
  }
};

export { staticValues };
