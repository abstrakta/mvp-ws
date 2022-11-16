/**
 * @fileOverview Library logging utility functions.
 */

import { BaseError } from './errors';

// Set of application modules.
const APP_MODULE_API = "API";
const APP_MODULE_DB = "DB";
const APP_MODULE_ENV = "ENV";

// Set of logging contexts.
const LOG_LEVEL_DEBUG = "DEBUG";
const LOG_LEVEL_ERROR = "ERR";
const LOG_LEVEL_INFO = "INF0";
const LOG_LEVEL_TODO = "TODO";
const LOG_LEVEL_WARNING = "WARN";

/**
 * Emits a logging message.
 *
 * @param {string} msg - Message to be logged.
 * @param {string} level - Level of importance.
 */
export const log = async (msg: string, module: string, level: string) => {
  // TODO: move to 3rd party logging utility.
  console.log(get_formatted_message(msg, module, level));
};

/**
 * Emits a logging message for error purposes.
 *
 * @param {Error} err - Trapped error.
 */
 export const logError = async (module: string, err: BaseError) => {
  const msg = err.code + " :: " + err.message;
  await log(msg, module, LOG_LEVEL_ERROR);
};

/**
 * Emits an api related logging message.
 *
 * @param {string} msg - Message to be logged.
 */
export const logAPI = async (msg: string, level: string = LOG_LEVEL_INFO) => {
  await log(msg, APP_MODULE_API, level);
};

/**
 * Emits a database related logging message.
 *
 * @param {string} msg - Message to be logged.
 */
export const logDB = async (msg: string, level: string = LOG_LEVEL_INFO) => {
  await log(msg, APP_MODULE_DB, level);
};

/**
 * Emits a logging message for environment purposes.
 *
 * @param {string} msg - Message to be logged.
 */
export const logEnv = async (msg: string, level: string = LOG_LEVEL_INFO) => {
  await log(msg, APP_MODULE_ENV, level);
};

/**
 * Formats a message to be logged.
 *
 * @param {msg} Message to be logged.
 * @param {level} Level of importance.
 */
const get_formatted_message = (msg: string, module: string, level: string): string => {
  return [
        `${new Date().toISOString()} [${level || LOG_LEVEL_INFO}] [${process.pid}]`,
        `ABSTRAKTA [${module || APP_MODULE_API}]`,
        msg,
    ].join(" :: ");
};
