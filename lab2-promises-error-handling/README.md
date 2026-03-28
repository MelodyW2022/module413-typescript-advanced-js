# Lab 2: Promises and Error Handling

## Description

This project is a TypeScript lab that practices working with Promises, error handling, and retry logic. It simulates API calls for a product catalog, product reviews, and a sales report. The program also uses custom error classes to separate network errors from data errors. Because the API simulation uses random success and failure, the output may be different each time the program runs. The retry mechanism helps failed requests try again before the program gives up.

## Features

- Simulated asynchronous API calls using `Promise` and `setTimeout`
- Fetch product catalog, product reviews, and sales report
- Error handling with `.catch()`
- Final cleanup message with `.finally()`
- Custom `NetworkError` and `DataError` classes
- Shared `handleError()` function
- Retry mechanism with `retryPromise()`

## Files

- `src/apiSimulator.ts` - simulates API requests and returns mock data
- `src/errorHandler.ts` - defines custom error classes and error handling logic
- `src/retryPromise.ts` - retries failed async calls after a delay
- `src/index.ts` - main application logic
- `reflection.md` - reflection on promises and error handling
- `README.md` - project overview and run instructions

## How to Run

```
cd lab2-promises-error-handling
npm install
npx tsc
node dist/index.js
```

## Example Output

![Program Output1](./assets/output1.png)

## What I Learned

- This lab helped me practice:
- Promises
- asynchronous programming
- .then(), .catch(), and .finally()
- custom error classes
- separating concerns in code
- retry logic with recursion
- TypeScript type safety
