# ng2-go-top-button
A simple customizable go-to-top button component for Angular 2 projects

# Installation
```
npm install ng2-go-top-button --save
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
```
Add it to imports in your module declaration:
```
@NgModule({
    ...
    imports: [BrowserModule, FormsModule, GoTopButtonModule],
    ...
```
If you need to export it from your module, than also add it to exports:
```
@NgModule({
    ...
    exports: [GoTopButtonModule]
    ...
```

On your template paste the `<go-top-button></go-top-button>` html. This will add a simple button with default styles and without animated scroll.

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
                    'color': 'blue',
                    'border': '5px solid',
                    'line-height': '20px'
                 }">
  </go-top-button>
```
Result:

![alt tag](https://psv4.userapi.com/c812433/u84916949/docs/f9e50f1bf3fd/bears_scrolling.gif)
