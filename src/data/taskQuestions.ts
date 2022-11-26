import { isEveryOdd } from '../tasks/isEveryOdd';
import { isLeastOneOdd } from '../tasks/isLeastOneOdd';
import { isOneOdd } from '../tasks/isOneOdd';
import { isSameParity } from '../tasks/isSameParity';
import { isOnePositive } from '../tasks/isOnePositive';
import { isTwoPositive } from '../tasks/isTwoPositive';
import { isParityTwoDigit } from '../tasks/isParityTwoDigit';
import { isLeastTwoSame } from '../tasks/isLeastTwoSame';
import { isIsoscelesTriangle } from '../tasks/isIsoscelesTriangle';
import { isEquilateralTriangle } from '../tasks/isEquilateralTriangle';
import { isInsideRectangle } from '../tasks/isInsideRectangle';
import { isRightTriangle } from '../tasks/isRightTriangle';

type TTask = {
  statement: string;
  task(data: number[]): boolean | undefined;
};

type TTasksData = Record<number, TTask>;

export const tasksData: TTasksData = {
  1: {
    statement: 'Каждое из чисел A и B нечетное',
    task: isEveryOdd,
  },
  2: {
    statement: 'Хотя бы одно из чисел A и B нечетное',
    task: isLeastOneOdd,
  },
  3: {
    statement: 'Ровно одно из чисел A и B нечетное',
    task: isOneOdd,
  },
  4: {
    statement: 'Числа A и B имеют одинаковую четность',
    task: isSameParity,
  },
  5: {
    statement: 'Ровно одно из чисел A, B, C положительное',
    task: isOnePositive,
  },
  6: {
    statement: 'Ровно два из чисел A, B, C являются положительными',
    task: isTwoPositive,
  },
  7: {
    statement: 'Данное число является четным двузначным',
    task: isParityTwoDigit,
  },
  8: {
    statement:
      'Среди трех данных целых чисел есть хотя бы одна пара совпадающих',
    task: isLeastTwoSame,
  },
  9: {
    statement: 'Треугольник со сторонами a, b, c является равнобедренным',
    task: isIsoscelesTriangle,
  },
  10: {
    statement: 'Треугольник со сторонами a, b, c является равносторонним',
    task: isEquilateralTriangle,
  },
  11: {
    statement:
      'Точка с координатами (x, y) лежит внутри прямоугольника, левая\n' +
      'верхняя вершина которого имеет координаты (x1, y1), правая нижняя — (x2, y2), а стороны параллельны координатным осям\n',
    task: isInsideRectangle,
  },
  12: {
    statement: 'Треугольник со сторонами a, b, c является прямоугольным',
    task: isRightTriangle,
  },
};
