import { consoleService } from './services/ConsoleService';
import { getTaskData } from './utils/getTaskData';
import { getTaskResult } from './utils/getTaskResult';

const app = async () => {
  const answer = await consoleService.read('Введите номер задачи (1-12):    ');

  const { question, task } = getTaskData(answer);

  const data = await consoleService.read(question);

  const statement = task(data);

  console.log(getTaskResult(statement));

  console.log('----------------------');

  await app();
};

void app();
