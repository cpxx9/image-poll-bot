# Nodejs Discord Image Poll Bot

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|TOKEN           | TOKEN accepted values            | STRING (must be valid bot token)      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/)


# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Create .env file

```
cd <project_name>
touch .env
```
- Add token to .env file
```
cd <project_name>
code .env
```
&emsp;-In the first line of .env file add
&emsp;<pre>
  &emsp;TOKEN = [discord bot token]
</pre>
- Install nodemon (optionally use -g instead of -d param to install globally)
```
npm i -d nodemon
```
- Build and run the project
```
nodemon
```  

# JavaScript + Node 
The main purpose of this repository is to create a bot that will react to images to create a basic poll.  


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be run                                                    |
| **src**/index.js         | Entry point to bot app                                                                  |
| package.json             | Contains npm dependencies as well as build scripts  | tsconfig.json            |