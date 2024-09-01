import { Request, Response } from "express";
import {fibonacci} from "./fib"; // Use import instead of require

export default (req: Request, res: Response) => {
  const { num } = req.params as { num: string }; // Specify num as a string

  // Safely parse to an integer
  const parsedNum: number = parseInt(num, 10);

  // Check if parsedNum is a valid number
  if (isNaN(parsedNum)) {
    res.status(400).send(`Invalid input: ${num} is not a valid number.`);
    return;
  }

  try {
    // Ensure fibonacci function returns a number
    const fibN: number = fibonacci(parsedNum);

    // Check if fibN is less than 0 (in case of logic to handle undefined or negative results)
    if (fibN < 0) {
      res.status(400).send(`fibonacci(${num}) is undefined`);
    } else {
      const result = `fibonacci(${parsedNum}) is ${fibN}`;
      res.send(result);
    }
  } catch (error) {
    // Handle potential runtime errors from the fibonacci function
    res.status(500).send("An error occurred while calculating the Fibonacci number.");
  }
};
