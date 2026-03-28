# Reflection

## Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?

In this lab, I learned why it is important to handle errors for each individual API call instead of only at the end of the promise chain. If error handling only happens once at the end, it can be harder to tell which specific request failed. By adding separate `.catch()` blocks for fetching the product catalog, product reviews, and sales report, I could see exactly where the problem happened. This made the program easier to debug and also allowed other API calls to continue when appropriate instead of stopping the entire process immediately.

## How does using custom error classes improve debugging and error identification?

Using custom error classes such as `NetworkError` and `DataError` improved debugging by making error types more specific. A `NetworkError` shows that the problem happened while simulating the request itself, while a `DataError` points to invalid or missing data in the response. This made the error messages more meaningful and helped me understand the source of the issue more quickly. It also made the error-handling code more organized because I could check the error type and respond differently based on the cause.

## When might a retry mechanism be more effective than an immediate failure response?

A retry mechanism can be more effective than failing immediately when the error may be temporary. For example, network-related issues can sometimes happen randomly, so retrying gives the request another chance to succeed. In this lab, the retry logic was useful because the simulated API calls used random failures. If a request failed once, retrying often allowed the data to be fetched successfully on the next attempt. However, retries are most useful for temporary problems and would not help much if the data itself is invalid. Overall, this lab helped me better understand asynchronous programming, promises, and how thoughtful error handling can make a program more reliable.
