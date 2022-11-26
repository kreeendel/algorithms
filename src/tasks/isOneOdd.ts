export const isOneOdd = (numbers: number[]): boolean => {
  const oddNumbers = numbers.filter((number) => number % 2 !== 0);

  return oddNumbers.length === 1;
};
