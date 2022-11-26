import { getTaskQuestion } from './getTaskQuestion';
import { tasksData } from '../data/taskQuestions';

export const getTaskData = (
  data: number[]
): {
  question: string;
  task(data: number[]): boolean | undefined;
} => {
  const taskNumber = data[0];

  if (!tasksData[taskNumber]) {
    return getTaskData([1]);
  }

  const { statement, task } = tasksData[taskNumber];

  return {
    question: getTaskQuestion(statement),
    task,
  };
};
