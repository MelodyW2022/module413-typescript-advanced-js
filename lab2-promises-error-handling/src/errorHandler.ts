// Custom error class for network-related errors
export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}
// Custom error class for data-related errors
export class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}

export const handleError = (error: unknown) => {
  if (error instanceof DataError) {
    console.error(`[Data Error]: ${error.message}`);
  } else if (error instanceof NetworkError) {
    console.error(`[Network Error]: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`[Error]: ${error.message}`);
  } else {
    console.error(`[Unknown Error]: ${error}`);
  }
};
