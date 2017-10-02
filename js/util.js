const Util = {
  glider: [
    [4, 3, 'green'],
    [3, 4, 'yellow'],
    [2, 2, 'purple'],
    [2, 3, 'orange'],
    [2, 4, 'pink']
  ],

  smallExploder: [
    [1, 0],
    [0, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [-2, 0]
  ],

  exploder: [
    [2, 0],
    [2, -2],
    [2, 2],
    [1, -2],
    [1, 2],
    [0, -2],
    [0, 2],
    [-1, -2],
    [-1, 2],
    [-2, -2],
    [-2, 2],
    [-2, 0]
  ],

  tenCellRow: [
    [0, -4],
    [0, -3],
    [0, -2],
    [0, -1],
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
  ],

  spaceship: [
    [1, -2],
    [2, -1],
    [2, 0],
    [2, 1],
    [2, 2],
    [1, 2],
    [0, 2],
    [-1, 1],
    [-1, -2]
  ],

  tumbler: [
    [2, -2],
    [2, 1],
    [1, -2],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-2, -1],
    [-3, -2],
    [-3, -3],
    [-2, -3],
    [-1, -3],
    [2, 1],
    [2, 2],
    [1, 1],
    [1, 2],
    [0, 1],
    [-1, 1],
    [-2, 1],
    [-3, 2],
    [-3, 3],
    [-2, 3],
    [-1, 3]
  ],

  madness: [
    [25, 137, 'red'],
    [25, 138, 'green'],
    [23, 138, 'blue'],
    [24, 140, 'yellow'],
    [25, 141, 'orange'],
    [25, 142, 'purple'],
    [25, 143, 'pink'],

    [55, 37, 'pink'],
    [55, 38, 'yellow'],
    [53, 38, 'green'],
    [54, 40, 'pink'],
    [55, 41, 'blue'],
    [55, 42, 'orange'],
    [55, 43, 'purple'],

    [65, 107, 'pink'],
    [65, 108, 'yellow'],
    [63, 108, 'purple'],
    [64, 110, 'blue'],
    [65, 111, 'orange'],
    [65, 112, 'green'],
    [65, 113, 'red']
  ]
};

export default Util;