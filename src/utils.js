
// Internal functions
export const gRandom = (maxN = 900, minN = 0) =>
  Math.floor(Math.random() * ((maxN - minN) + 1)) + minN;


export const isPrime = (n) => {
  const isPrimeIter = (num, maxCond, i = 2) => {
    if (num % i === 0) {
      return false;
    }
    if (i > maxCond) {
      return true;
    }
    return isPrimeIter(num, maxCond, i + 1);
  };

  if (n < 2) {
    return false;
  }
  return isPrimeIter(n, n / 2);
};
