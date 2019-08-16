class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

}

export class NotFoundError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}