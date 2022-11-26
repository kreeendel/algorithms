export const isTwoPositive = (numbers: number[]): boolean => {
  const positiveNumbers = numbers.filter((number) => number > 0);

  return positiveNumbers.length === 2;
};
