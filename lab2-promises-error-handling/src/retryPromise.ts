export function retryPromise<T>(
  fn: () => Promise<T>,
  retries: number,
  delay: number,
): Promise<T> {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        console.log(`Attempt failed. Retries left: ${retries}`);
        if (retries === 0) {
          reject(error);
        } else {
          //after waiting delay milliseconds
          //call retryPromise(...) again
          //if that new retry succeeds, use resolve(...) for the current outer Promise
          //if that new retry fails, use reject(...) for the current outer Promise
          setTimeout(() => {
            retryPromise(fn, retries - 1, delay)
              .then(resolve)
              .catch(reject);
          }, delay);
        }
      });
  });
}
