# Project walk through

This web app is website classifying app based on Url. In details, it defines the classification of website in percentage.

I used following things in project:
- Webpack
- Sass
- Webpack Loaders and Plugins
- Service workers
- [Meaningful Cloud API](https://learn.meaningcloud.com/developer/text-classification/2.0/console)

I used [Meaningful Cloud API](https://learn.meaningcloud.com/developer/text-classification/2.0/console), it;s free and has other API options too, if you wish!


# Getting started

Remember that once you clone, you will need to install everything:

`cd` into project root:
- `npm install`

## Setting up the API

The [Meaningful Cloud API](https://learn.meaningcloud.com/developer/text-classification/2.0/console) is perhaps different than what you've used before. It has you install a node module to run certain commands through, it will simplify the requests we need to make from our node/express backend.

## Step 1: Signup for an API key
First, you will need to go [Meaningful Cloud API](https://learn.meaningcloud.com/developer/text-classification/2.0/console). Signing up will get you an API key.It is free.


## Step 2: Set up the API key
In the project root craete ```.env``` file and write your API key down:
  ```
  API_KEY = "*****************************"
  ```

## Step 3: Environment Variables
Next we need to declare our API keys, which will look something like this:
```
  const API_KEY = process.env.API_KEY,

```
You do not have to import API_KEY from ```.env``` file. In this project, ```dotenv-webpack``` plugin is used, it will do all works in the obehind.
## Step 4: NPM script commands

All necesseryt script commands are set:
```
//package.json

...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/server/index.js",
    "build-prod": "webpack --config webpack.prod.js",
    "build-dev": "webpack-dev-server  --config webpack.dev.js --open"
...
```

## Deploying

I used [Netlify](https://www.netlify.com/) to deploy, other option you can use [Heroku](https://www.heroku.com/).
You can see the project [here](https://udacity-nlp.netlify.app/)
