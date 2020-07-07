# Digital Challenge

In this project I applied my knowledge in React.js by building a simple website where you can dynamically search for different movies, be it by title, genre, or release year. It uses simple API calls from "The Movie Database" [API](https://www.themoviedb.org/documentation/api)

## Getting Started

These instructions will help you set up the project easily and without any trouble.

### Prerequisites

You must have [npm](https://www.npmjs.com/get-npm) installed in your computer, as well as [React.js](https://reactjs.org/docs/getting-started.html).

You must also create an account at [TMDB](https://www.themoviedb.org/) and obtain your private API KEY by following the documentation [here](https://developers.themoviedb.org/3/getting-started/introduction).


### Installing

Once you have installed the prerequisites you must type the following command: 

```
npm i
```
This will install all the necessary dependencies for the project.

After everything all the packages have been installed correctly you must now create a *.env* file in your root folder (same level as the *./src/* folder).
Inside this file you must add the following line:

```
REACT_APP_API_KEY={YOUR-API-KEY}
```

You will need to do this so that the app that is running in your local computer can access the API.

Now start the server with the following command:

```
npm start
```

If everything was set up correctly you must see the following lines:

```
Compiled successfully!

You can now view movie-db in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.109:3000
```
