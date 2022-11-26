export const isSameParity = (numbers: number[]): boolean =>
  numbers.every((number, index) => {
    const beforeParity = numbers[index - 1] % 2 === 0;

    const currentParity = number % 2 === 0;

    const afterParity = numbers[index + 1] % 2 === 0;

    if (index % 2 !== 0) {
      return beforeParity === currentParity;
    }

    return currentParity === afterParity;
  });
