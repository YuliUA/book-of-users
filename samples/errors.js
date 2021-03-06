// this is the example how you can define errors


class NotFoundError extends Error {
    constructor(message) {
      super(message);
      this.name = 'Not Found Error';
      this.status = 404;
    }
  }
  
  class ValidationError extends Error {
    constructor(message, errors) {
      super(message);
      this.name = 'Validation Error';
      this.status = 400;
      this.errors = errors;
    }
  }
  
  class PermissionError extends Error {
    constructor(message) {
      super(message);
      this.name = 'Permissions Error';
      this.status = 403;
    }
  }
  
  class UnexpectedError extends Error {
    constructor(message) {
      super(message);
      this.name = 'Unexpected Error';
      this.status = 500;
    }
  }
  
  class BadRequestError extends Error {
    constructor(message) {
      super(message);
      this.name = 'Bad Request';
      this.status = 400;
    }
  }
  
  class UnauthorizedError extends Error {
    constructor(message) {
      super(message);
      this.name = 'Unauthorized';
      this.status = 401;
    }
  }
  
  class ConflictError extends Error {
    constructor(message) {
      super(message);
      this.name = 'Conflict Error';
      this.status = 409;
    }
  }
  
  module.exports = {
    NotFoundError,
    ValidationError,
    PermissionError,
    UnexpectedError,
    BadRequestError,
    UnauthorizedError,
    ConflictError,
  };