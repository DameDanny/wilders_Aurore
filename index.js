import chalk from "chalk";
import "dotenv/config";
console.log(chalk.blue(`Hello ${process.env.NAME1}!`));
console.log(chalk.green(`Hello ${process.env.NAME2}!`));
console.log(chalk.red(`Hello ${process.env.NAME3}!`));
console.log(chalk.white(`Hello ${process.env.NAME4}!`));
