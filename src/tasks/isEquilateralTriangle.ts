import { isTriangle } from './utils/isTriangle';

export const isEquilateralTriangle = (sides: number[]): boolean | undefined => {
  if (!isTriangle(sides)) {
    return;
  }

  const [first, second, third] = sides;

  return first === second && second === third;
};
