// Endpoint for querying the fibonacci numbers

import { Request, Response } from 'express';
import { fibonacci } from './fib';
//import fibonacci from "./fib"; // Use import instead of require

export default (req: Request, res: Response) => {
  const {num} = req.params as { num: string }; // Specify num as a string

  const fibN = fibonacci(parseInt(num, 10)); // Safely parse to an integer
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
