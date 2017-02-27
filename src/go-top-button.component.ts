import {Component, HostListener, Input, trigger, state, style, transition, animate} from '@angular/core';

@Component({
    selector: 'go-top-button',
    templateUrl: './go-top-button.component.html',
    styleUrls: ['./go-top-button.component.css'],
    animations: [
        trigger('appearInOut', [
            state('in', style({
                'display': 'block',
                'opacity': '0.85'
            })),
            state('out', style({
                'display': 'none',
                'opacity': '0'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),
    ],
})
export class GoTopButton {
    private animationState: string = 'out';

    /**
     * Default button styles
     * @type {{position: string;
     * top: string;
     * bottom: string;
     * right: string;
     * width: string;
     * height: string;
     * line-height: string;
     * text-decoration: string;
     * color: string;
     * background: string;
     * border: string;
     * border-radius: string}}
     */
    private defaultStyles: any = {
        'position': 'fixed',
        'top': '50%',
        'bottom': '50%',
        'right': '0',
        'width': '35px',
        'height': '35px',
        'line-height': '35px',
        'text-decoration': 'none',
        'color': 'white',
        'background': 'rgba(0, 0, 0, 0.3)',
        'border': 'none',
        'border-radius': '3px 0 0 3px'
    };

    /**
     * Go top button will appear when user scrolls Y to this position
     * @type {number}
     */
    @Input() scrollYDistance: number = 200;

    /**
     * Button inner html
     * @type {string}
     */
    @Input() html: string = '';

    /**
     * User styles config object
     * @type {{}}
     */
    @Input() styles: any = {};

    /**
     * If true scrolling to top will be animated
     * @type {boolean}
     */
    @Input() animate: boolean = false;

    /**
     * Animated scrolling speed
     */
    @Input() speed: number = 80;

    /**
     * Listens to window scroll and animates the button
     */
    @HostListener('window:scroll', [])
    onWindowScroll = () => {
        var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.animationState = currentScrollTop > this.scrollYDistance ? 'in' : 'out';
    };

    /**
     * Scrolls window to top
     * @param event
     */
    scrollTop = (event: any) => {
        event.preventDefault();
        if (this.animate) {
            var timerID = setInterval(function () {
                window.scrollBy(0, -this.speed);

                if (window.scrollY == 0)
                    clearInterval(timerID);
            }.bind(this), 15);
        } else {
            window.scrollTo(0, 0);
        }
    };

    getStyle = () => {
        var defaults = {};
        for(var prop in this.defaultStyles){
            defaults[prop]=this.defaultStyles[prop];
        }

        for(var prop in this.styles){
            defaults[prop] = this.styles[prop];
        }
        return defaults;
    };
}
