# Fullstack Records / GraceShopper

By: Robert Nixon, Peter Samper, Mike Vosters, Eli Plutchok
# Description

Fullstack Records is a fullstack ecommerce web application that allows users to purchase vintage records online. It was created by 4 students at Fullstack Academy (NYC). 

The application’s back-end was created using an express server with RESTful API’s and Sequelize to interface with a Postgres database.

On the front-end, react for creating the UI and redux for state management

## Installation

Fork and Clone this repo

Use the package manager NPM to install dependencies:
npm install

## Setup & Start

Create two Postgres databases (MY_APP_NAME should match the ‘name’ parameter in ‘package.json’): 
createdb $MY_APP_NAME
createdb $MY_APP_NAME-test

By default npm test will use the $MY_APP_NAME-test database while regular development will use $MY_APP_NAME

To seed the databases use:
npm run seed

Create a ‘secrets.js’ file in the root of the project this file is listed in the .gitignore store all your private keys here

To start the server and client you can run: npm run start-dev

If you want to run the server and/or webpack separately, you can also npm run start-server and npm run build-client.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
MIT


