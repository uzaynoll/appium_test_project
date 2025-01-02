import { remote } from 'webdriverio';
import { capabilities, host, port } from './appium-config.js';

let driver;

export const initDriver = async () => {
    if (!driver) {
        driver = await remote({
            capabilities,
            host,
            port,
            logLevel: 'debug',
        });
    }
    return driver;
};

export const closeDriver = async () => {
    if (driver) {
        await driver.deleteSession();
        driver = null;
    }
};
