# Fullstack demo generated using [Angular Fullstack][1]

[Angular Fullstack][1] is a MEAN generator. It scaffolds applications with MongoDB, Express, AngularJS, and Node. 

By running `yo angular-fullstack` and checking yes to everything, you get a project very similar to this. This repo is to give you an idea of what that project looks like.

## Live Demo

http://fullstack-demo.herokuapp.com/. 

> Note: Demo is running on Heroku free instance, so you will likely have to refresh for it to load.

## Getting Started

Here's an overview of the application structure:

 * [Server Application][3] High level logic for bootstrapping the server.
 * [NodeJS Routes][6] Where we set up our REST api routes
 * [Server Controllers][5] Where we take care of backend logic
 * [Server Models][4] Where we setup our object schema and validation.
 * [NodeJS Middleware][7] Where we put additional logic that a route must pass through before going to the next route.
 * [Angular Routes][8] Where we set up routes to our application views
 * [Angular Views][9] Where we set up our application views
 * [Angular Controllers][11] Where we keep our frontend logic
 * [Angular Services][10] Where we connect to our REST api
 * [Angular Tests][12] Where we write our angular tests

## What about Coffeescript and Jade?

An equivalent of this project can be generated with Coffeescript and Jade Templates by using `yo angular-fullstack --coffee --jade`

## Quick Install

Easily create your own project as specified here: https://github.com/DaftMonk/generator-angular-fullstack#usage

Then launch your express server in development mode using

    $ grunt serve


  [1]: https://github.com/DaftMonk/generator-angular-fullstack
  [3]: https://github.com/DaftMonk/fullstack-demo/blob/master/server.js
  [4]: https://github.com/DaftMonk/fullstack-demo/blob/master/lib/models/thing.js
  [5]: https://github.com/DaftMonk/fullstack-demo/blob/master/lib/controllers/api.js
  [6]: https://github.com/DaftMonk/fullstack-demo/blob/master/lib/routes.js
  [7]: https://github.com/DaftMonk/fullstack-demo/blob/master/lib/middleware.js
  [8]: https://github.com/DaftMonk/fullstack-demo/blob/master/app/scripts/app.js
  [9]: https://github.com/DaftMonk/fullstack-demo/tree/master/app/views/partials
  [10]: https://github.com/DaftMonk/fullstack-demo/blob/master/app/scripts/services/session.js
  [11]: https://github.com/DaftMonk/fullstack-demo/blob/master/app/scripts/controllers/login.js
  [12]: https://github.com/DaftMonk/fullstack-demo/blob/master/test/spec/controllers/main.js