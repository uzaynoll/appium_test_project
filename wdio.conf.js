export const runner = 'local';
export const specs = ['./test/**/*.js'];
export const maxInstances = 5;
export const capabilities = require('./config/appium-config').capabilities;
export const logLevel = 'debug';
export const bail = 0;
export const baseUrl = '';
export const waitforTimeout = 5000;
export const connectionRetryTimeout = 120000;
export const connectionRetryCount = 3;
export const services = ['appium'];
export const framework = 'mocha';
export const reporters = ['spec'];
