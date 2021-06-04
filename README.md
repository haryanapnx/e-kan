# E-kan - Web Apps
__E-kan__ is a monitoring web platform for fish commodities from various regions.


## demo

[E-kan](https://e-kan-df692.web.app/)

## Project Setup
 - Rename file `.env.example` to `.env `
 - `npm install` to Install all packages and dependencies



In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Optional
you can running in nginx or server.
or

run locally
-  ```npm install -g serve``` then
- ```serve -s {BUILD_FOLDER}``` e.g `serve -s build`
- running on [http://localhost:5000](http://localhost:5000)


### Using `Docker`
__Build Image__
 - `copy & run` this script __`docker build -t e-kan.`__ into your terminal.
 
 > Note: In this case Docker is already installed ! <br>if don't, you can follow [this](https://www.docker.com/get-started)
 
__Run__

 - `copy & run` this script __`docker run -d -it  -p 8000:80/tcp e-kan`__
 
 - if running. you can access [http://localhost:8000](http://localhost:8000)
 - _DONE_ !


<br><br>


cheers !


<img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" width="100" height="100" />

[@haryfun_](https://hary.fun)
