/**
 * @fileOverview Exceptions thrown by the library.
 */

/**
 * Managed exceptions base class.
 * @constructor
 * @param {string} err - Error message.
 * @param {string} code - Error code.
 */
export class BaseError extends Error {
  code: string;
  
  constructor(message: string, code: string) {
    super(message);
    this.code = code;
    this.name = this.constructor.name;
  }
}

/**
 * Error thrown when a feature is invoked but not yet implemented.
 */
export class NotImplementedError extends BaseError {
  constructor() {
    super('Feature is not implemented at this time', 'ERR_NOT_IMPLEMENTED');
  }
}

/**
 * Raised when environment settings are invalid.
 */
export class InvalidEnvironmentError extends BaseError {
  constructor() {
    super(
      'Environment is unsupported - review your settings',
      'ERR_ENVIRONMENT_INVALID',
    );
  }
}

