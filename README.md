# ng2-go-top-button
A simple customizable go-to-top button component for Angular projects

# Installation
```
npm install ng2-go-top-button --save
```

# Configuration

### SystemJS

Register @angular/animations and the package itself in systemjs.config.js as following:
```
System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    map: {
        ...
      'ng2-go-top-button': 'npm:ng2-go-top-button',
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
    },
    packages: {
        ...
       'ng2-go-top-button': {
            defaultExtension: 'js',
            main: './index.js'
      }
    }
```

# API
| Property | Type | Description |
| ------ | ------ | ------ |
| scrollDistance | *number* | Number of pixels to be scrolled Y for button to be shown. Defaults to 200px. Must be greater than zero. |
| html | *string* | Inner html of button element. Could be an icon or text. Empty by default. |
| styles | *object* | User-defined styles config for the button. |
| animate | *boolean* | If true, scrolling will be animated. False by default. |
| speed | *number* | Speedof animated scroll. Must be greater than 1. 80 by default. |
| acceleration  | *number* | Number of pixels to speed up when scrolling is animated. Zero by default - this way page will be scrolled top with the constant speed. |

# Usage
Import statement:
```
import {GoTopButtonModule} from 'ng2-go-top-button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // angular 4.x and greater
```
Add it to imports in your module declaration. When using angular 4.x and greater, also import a `BrowserAnimationsModule`:
```
@NgModule({
    ...
    imports: [..., GoTopButtonModule, BrowserAnimationsModule],
    ...
```

If you need to export it from your module, than also add it to exports:
```
@NgModule({
    ...
    exports: [..., GoTopButtonModule]
    ...
```

On your template paste the `<go-top-button></go-top-button>` html. This will add a simple button with default styles and without animated scroll. By default go-top-button will appear on the right side, 50% top and bottom and without any icons or text. You can then customize its styles and behaviour.

Example of customization:
```
<go-top-button [html]="'<i class=\'fa fa-arrow-up\'></i>'"
                 [animate]="true"
                 [speed]="50"
                 [acceleration]="2"
                 [scrollDistance]="300"
                 [styles]="{
                    'border-radius': '20px 20px 20px 20px',
                    'right': '5px',
                    'color': 'green',
                    'border': '5px solid',
                    'line-height': '20px'
                 }">
  </go-top-button>
```
# IE-specific issues:

IE does not support web animations. If you would like to enable them, install and import the corresponding polyfill to your polyfills.js file:

In your project's directory:
```
npm install --save web-animations-js
```

In polyfills.js:
```
import 'web-animations-js';
```
# Result:

![alt tag](https://gifyu.com/images/ezgif.com-video-to-gifface4.gif)
