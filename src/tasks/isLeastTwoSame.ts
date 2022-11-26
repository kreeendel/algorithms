export const isLeastTwoSame = (numbers: number[]): boolean => {
  const uniqNumbers = Array.from(new Set(numbers));

  return numbers.length > uniqNumbers.length;
};
