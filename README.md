# Appium Test Automation Framework

## Overview
This project is designed to automate mobile application testing using Appium and WebDriverIO. It provides test scripts and utilities to ensure the proper functioning of your mobile application.

## Prerequisites
- **Node.js** (version x.x.x) - [Download Node.js](https://nodejs.org/)
- **Appium** (version x.x.x) - [Install Appium](https://www.npmjs.com/package/appium)
- **WebDriverIO** (version x.x.x) - [Install WebDriverIO](https://www.npmjs.com/package/webdriverio)

## Installation
1. Clone the repository:
   ```bash
   https://github.com/uzaynoll/appium_test_project
2. Install dependencies:
    ```bash
    npm install
3. Configure Appium
    ```bash
    // appium-config.js
    export const capabilities = {
        platformName: 'Android',
        'appium:deviceName': 'Your_Device_Name',
        'appium:udid': 'Your_Device_UDID',
        'appium:platformVersion': 'Your_Device_Version',
        'appium:automationName': 'UiAutomator2',
    };
4. Run Appium Server

    Open a terminal and start the Appium server:
    ```bash
    appium

## Running Tests
1. Run Tests with Mocha: 

    To execute the test cases, use the following command:

    ```bash
    npm test    
2. Moch Test Output
The test cases will run, and the results will be displayed in the terminal.

## Folder Structure
 ```
 /my-appium-project
│
├── /node_modules               # Node.js modules
├── /test                         # Test directory
│   ├── /pages                   # Page Objects (POM)
│   │   ├── HomePage.js          # Example Page Object
│   │   ├── LoginPage.js         # Example Page Object
│   │   └── ProfilePage.js       # Example Page Object
│   │
│   ├── /tests                   # Test cases
│   │   ├── loginTest.js         # Example Test Case
│   │   ├── homeTest.js          # Example Test Case
│   │   └── profileTest.js       # Example Test Case
│   │
│   └── /reports                 # Test reports
│
├── /config                       # Configuration files
│   ├── appium-config.js         # Appium config
│   ├── webdriver-config.js      # WebdriverIO config
│   └── test-config.js           # Custom test configuration (e.g., test-timeouts, browser settings)
│
├── /helpers                      # Utility/helper functions
│   ├── driver.js                # WebDriver utility (for managing browser sessions)
│   ├── wait.js                  # Wait function for element interaction
│   ├── logger.js                # Logger for test execution
│   └── utilities.js             # General utility functions
│
├── /data                         # Test data (e.g., test data files)
│   ├── testData.json            # Example test data
│   └── testData.yaml            # Example test data
│
├── /logs                         # Logs directory for test run logs
│
├── /assets                       # Assets (like screenshots, test images, etc.)
│
└── /package.json                 # Node.js project file


