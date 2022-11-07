/**
 * @fileOverview Library logging utility functions.
 */

import { BaseError } from './errors';

// Set of logging contexts.
const LOG_LEVEL_API = "API";
const LOG_LEVEL_DB = "DB";
const LOG_LEVEL_DEBUG = "DEBUG";
const LOG_LEVEL_ERROR = "ERR";
const LOG_LEVEL_ENV = "ENV";
const LOG_LEVEL_INFO = "INF0";
const LOG_LEVEL_TODO = "TODO";
const LOG_LEVEL_WARNING = "WARN";

/**
 * Emits a logging message.
 *
 * @param {string} msg - Message to be logged.
 * @param {string} level - Level of importance.
 */
export const log = async (msg: string, level: string) => {
  // TODO: move to 3rd party logging utility.
  console.log(get_formatted_message(msg, level));
};

/**
 * Emits an api related logging message.
 *
 * @param {string} msg - Message to be logged.
 */
export const logAPI = async (msg: string) => {
  await log(msg, LOG_LEVEL_API);
};

/**
 * Emits a database related logging message.
 *
 * @param {string} msg - Message to be logged.
 */
export const logDB = async (msg: string) => {
  await log(msg, LOG_LEVEL_DB);
};

/**
 * Emits a logging message for debug purposes.
 *
 * @param {string} msg - Message to be logged.
 */
export const logDebug = async (msg: string) => {
  await log(msg, LOG_LEVEL_DEBUG);
};

/**
 * Emits a logging message for error purposes.
 *
 * @param {Error} err - Trapped error.
 */
export const logError = async (err: BaseError) => {
  const msg = err.code + " :: " + err.message;
  await log(msg, LOG_LEVEL_ERROR);
};

/**
 * Emits a logging message for environment purposes.
 *
 * @param {string} msg - Message to be logged.
 */
export const logEnv = async (msg: string) => {
  await log(msg, LOG_LEVEL_ENV);
};

/**
 * Emits a logging message for information purposes.
 *
 * @param {string} msg - Message to be logged.
 */
export const logInfo = async (msg: string) => {
  await log(msg, LOG_LEVEL_INFO);
};

/**
 * Emits a logging message for warning purposes.
 *
 * @param {string} msg - Message to be logged.
 */
export const logWarning = async (msg: string) => {
  await log(msg, LOG_LEVEL_WARNING);
};

/**
 * Emits a logging message for TODO purposes.
 *
 * @param {string} msg - Message to be logged.
 */
export const logTODO = async (msg: string) => {
  await log("todo: " + msg, LOG_LEVEL_TODO);
};

/**
 * Formats a message to be logged.
 *
 * @param {msg} Message to be logged.
 * @param {level} Level of importance.
 */
const get_formatted_message = (msg: string, level: string) => {
  return [
        new Date().toISOString(),
        "API",
        `[${level || LOG_LEVEL_INFO}]`,
        msg,
    ].join(" :: ");
};
