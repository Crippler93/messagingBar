# Messaging API

REST-API made with **typescript** and **expressJS** to provide a basic chat communication between users

## Requirements

Have installed on your machine:

* nodeJs
* npm
* yarn
* mongoDB

Make sure you have mongodb service running and that you copy `.env-local` content to a new `.env` file.

> **environment keys**
> **PORT**: specify the port number for the application
> **DB_URI**: is the mongodb uri connection string more info [here](https://docs.mongodb.com/manual/reference/connection-string/)

## Installation

Execute the following command on root directory

To install dependencies:
```
yarn
```

To copy environment variables:
```
cp .env-local .env
```

To execute the program:
```
yarn start
```
and to execute it in development mode:
```
yarn dev
```

## Documentation

While server is running, `/api-docs` endpoint it's accessible and have all the information about the API endpoints.

### Screenshots