# First Electron

An Experimental electron app to learn more about the framework.

## Quick Start

### Prerequisites

To build this application, you'll need Node.JS installed with NPM (bundled with Node.JS). You can download them here:

[Download Node.JS and NPM](https://nodejs.org/en/)

### Install and Run

Clone the repo  
```
git clone git@github.com:JonathanPeterCole/First-Electron.git
```

Install with NPM  
```
npm install
```

Build and run the applcation  
```
npm run buildRun
```

### Packaging

To package the app, use the following command, which will build the project for production and then package the application. Packaging the application will always build for production, disabling dev-tools and source maps.  
```
npm run pack
```

## Commands

The following NPM scripts are included in the project. For the commands that build or start the project, you can specify the environment with `:prod` or `:dev`.  

* **Start**  
  Runs the application.  
  `npm run start`

* **Build**  
  Runs webpack to convert ES6 code.  
  `npm run build`

* **Build and Run**  
  Runs webpack to convert ES6 code and starts the app.  
  `npm run buildRun`

* **Package**  
  Packages the app for distribution.  
  `npm run pack`

* **Linting**  
  Runs ESLint to lint both the client and server-side code. Use `:fix` to attempt to automatically apply fixes.  
  `npm run lint`  

## Linting

This project is linted with ESlint standard and standard-react. Commits with linting issues will be blocked.