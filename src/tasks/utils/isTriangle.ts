export const isTriangle = (sides: number[]): boolean | undefined => {
  if (sides.length !== 3) {
    return;
  }

  const [first, second, third] = sides;

  if (first + second < third) {
    return;
  }

  if (first + third < second) {
    return;
  }

  if (second + third < first) {
    return;
  }

  return true;
};
