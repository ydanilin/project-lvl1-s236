
// Internal functions
const gRandom = (maxN = 900, minN = 0) =>
  Math.floor(Math.random() * ((maxN - minN) + 1)) + minN;

export default gRandom;
