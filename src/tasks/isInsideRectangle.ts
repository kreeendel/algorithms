export const isInsideRectangle = (coordinates: number[]): boolean => {
  const [x, y, x1, y1, x2, y2] = coordinates;

  return x > x1 && x < x2 && y < y1 && y > y2;
};
