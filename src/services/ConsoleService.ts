import readline from 'readline';

class ConsoleService {
  private readline;

  constructor() {
    this.readline = readline.createInterface(process.stdin, process.stdout);
  }

  public async read(query: string): Promise<number[]> {
    const prompt = () =>
      new Promise((resolve) => {
        this.readline.question(query, resolve);
      });

    const answer = (await prompt()) as string;

    return this.convertFromRaw(answer);
  }

  private convertFromRaw(raw: string): number[] {
    return raw.split(' ').map((item) => {
      const number = parseInt(item);

      if (!isNaN(number)) {
        return number;
      }

      console.log(`${item} - не является числом`);

      return 0;
    });
  }
}

export const consoleService = new ConsoleService();
