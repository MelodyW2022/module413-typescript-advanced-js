export class AppError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "App Error";
  }
}

export function handleError(error: unknown): void {
  // Check error type
  // Log meaningful error message
  if (error instanceof AppError) {
    console.error(`[App Error]: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`[Error]: ${error.message}`);
  } else {
    console.error(`[Unknown Error]: ${error}`);
  }
}
