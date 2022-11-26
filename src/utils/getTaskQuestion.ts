export const getTaskQuestion = (statement: string): string => {
  const base = 'Введите числа для проверки высказывания "';

  return base + statement + '":    ';
};
