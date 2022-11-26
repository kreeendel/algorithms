export const isOnePositive = (numbers: number[]): boolean => {
  const positiveNumbers = numbers.filter((number) => number > 0);

  return positiveNumbers.length === 1;
};
