import { isTriangle } from './utils/isTriangle';

export const isRightTriangle = (sides: number[]): boolean | undefined => {
  if (!isTriangle(sides)) {
    return;
  }

  const hypotenuse = Math.max.apply(undefined, sides);

  const [cathetus1, cathetus2] = sides.filter((side) => side !== hypotenuse);

  return (
    Math.pow(hypotenuse, 2) === Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)
  );
};
