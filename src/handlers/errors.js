class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends CustomError {
  constructor(message, errors) {
    super(message);
    this.status = 400;
    this.errors = errors.map(({ message, path }) => ( { message, path }));
  }
}

export class BadRequestError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 400;
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