import { isTriangle } from './utils/isTriangle';
import { isLeastTwoSame } from './isLeastTwoSame';

export const isIsoscelesTriangle = (sides: number[]): boolean | undefined => {
  if (!isTriangle(sides)) {
    return;
  }

  return isLeastTwoSame(sides);
};
