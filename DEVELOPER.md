# Build the library

## Install dependencies

Run `npm ci` or 

    npx npm-force-resolutions
    npm install

There is currently an issue with a version of Babel that prevents the example application from building.
It is fixed thanks to the `npm-force-resolutions` tools and the `resolutions` configuration in the `package.json` file.

## Lint

Run `npx ng lint`

## Build

Build the library

    npx ng build ng2-go-top-button
    
Build the example app (build the library first)

    npx ng build example-app --prod
    
## Launch the example app

First, build the library.

Then serve the example app

    npx ng serve example-app
    
Then open http://localhost:4200/

## Publish the library

Build the library then, go to the `dist` directory and publish it.

    npx ng build ng2-go-top-button
    cd dist/ng2-go-top-button
    npm publish
