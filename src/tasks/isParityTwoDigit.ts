export const isParityTwoDigit = (numbers: number[]): boolean =>
  numbers.every((number) => {
    const isParity = number % 2 === 0;

    const isTwoDigit = number > 9 && number < 100;

    return isParity && isTwoDigit;
  });
