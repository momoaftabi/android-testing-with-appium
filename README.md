# android-testing-with-appium
This is a framework for "Jotno-For Doctors" mobile application automation. WebdriverIO is the base framework with Appium as a service and Appium Flutter Driver as driver. It will generate automated report upon each run.
The structure of the project:
``` bash
root
├───api
├───aut
├───helper
├───page_objects
│   ├───common_pages
│   └───single_pages
├───reports
├───tests
│   └───regression
└───test_data
```

How to run:  
1. Install and configure Node, Java and Adroid SDK
2. Open cmd and run "npm install", it will install all necessary dependencies  
3. Go to "node_modules\.bin" directory and install "appium flutter driver" and "appium flutter finder"  
4. Run the command "appium"  
5. Run Emulator  
6. Open a new terminal and use the command "npx wdio run wdio.conf.cjs" to run the test cases
