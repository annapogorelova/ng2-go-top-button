# Build the library

## Install dependencies

Run `npm ci` or `npm install`.

## Lint

Run `npx ng lint`

## Build

Build the library

    npx ng build ng2-go-top-button --prod
    
Build the example app (build the library first)

    npx ng build example-app --prod
    
## Launch the example app

First, build the library.

Then serve the example app

    npx ng serve example-app
    
Then open http://localhost:4200/

## Publish the library

Build the library then, go to the `dist` directory and publish it.

    npx ng build ng2-go-top-button --prod
    cd dist/ng2-go-top-button
    npm publish
