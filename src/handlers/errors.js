class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
class BadRequestError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
export class ValidationError extends BadRequestError {
  constructor(message, errors) {
    super(message);
    this.errors = errors.map(({ message, path }) => ( { message, path }));
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

export class UnprocessableEntityError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 422;
  }
}