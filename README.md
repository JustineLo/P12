# P12 Frontend Dashboard

Welcome to the P12 Frontend Dashboard repository! This project is a frontend web application built with React, designed to work alongside the [P9 Backend Server](https://github.com/JustineLo/P9-front-end-dashboard). In this README, you'll find instructions on how to set up the prerequisites, install, and run the application.

## Prerequisites

Before you begin, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/en/download/) (v14.x or later)
- [Yarn](https://yarnpkg.com/)
- [npm](https://www.npmjs.com/get-npm) (v7.x or later)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (v2.x or later)

Additionally, you will need to set up and run the [P9 Backend Server](https://github.com/JustineLo/P9-front-end-dashboard) before you can launch the P12 Frontend Dashboard.

## Running the Backend Server

Before you can run the P12 Frontend Dashboard, you need to set up and run the P9 Backend Server. Follow the instructions below or in the [P9 Backend Server repository](https://github.com/JustineLo/P9-front-end-dashboard).

### 2.2 Launching the backend server without Docker

- Fork the repository
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.


## Install the Frontend app

1. Clone the P12 Frontend Dashboard repository:

```
git clone https://github.com/JustineLo/P12.git
``` 

2. Navigate to the cloned repository:
```
cd P12
```

3. Install the dependencies:
```
npm install
```

## Running the Frontend Dashboard

Once the P9 Backend Server is up and running, you can launch the P12 Frontend Dashboard:

1. Run the frontend application:
```
npm start
```

The application should now be running on http://localhost:3001. Open the link in your preferred web browser to access the dashboard.

## Switching Between API and Mock Functions

This project supports switching between the actual API functions and the mock functions for easier development and testing. To enable or disable the mock functions, follow these steps:

1. Open the `.env` file located in the root of the project.

2. Locate the `REACT_APP_MOCKACTIVE` variable. This variable is used to determine whether the application should use the mock functions or the actual API functions.

3. Change the value of `REACT_APP_MOCKACTIVE` to `"true"` to enable the mock functions. To disable the mock functions and use the actual API functions, set the value to `"false"`.


4. Save the changes in the `.env` file.

5. Restart the development server for the changes to take effect.

Now, the application will use the specified set of functions (either `utils.js` for actual API functions or `utilsMock.js` for mock functions) based on the value of `REACT_APP_MOCKACTIVE` in the `.env` file.
