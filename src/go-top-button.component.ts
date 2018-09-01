import {Component, HostListener, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
    selector: 'go-top-button',
    template: `<button type="button" aria-label="go to top of page"
                        [@appearInOut]="animationState"
                        (click)="scrollTop($event)"
                        [ngStyle]="getStyle()"
                        [ngClass]="classNames">
                        <ng-content></ng-content>
                </button>`,
    encapsulation: ViewEncapsulation.None,
    styles: [
        `.go-top-button {
            position: fixed;
            cursor: pointer;
            outline: none;
            top: auto;
            bottom: 50%;
            right: 0;
            width: 35px;
            height: 35px;
            line-height: 35px;
            text-decoration: none;
            color: #ffffff;
            background: rgba(0, 0, 0, 0.3);
            border: none;
            border-radius: 3px 0 0 3px;
        }

        .go-top-button:hover, .go-top-button:focus {
            background-color: rgba(0, 0, 0, 0.6);
            text-decoration: none;
            color: white;
        }`
    ],
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

/**
 * Component for adding a go-to-top button to scrollable browser content
 */
export class GoTopButton implements OnInit {
    animationState: string = 'out';
    private timerID: any = null;

    /**
     * Go top button will appear when user scrolls Y to this position
     */
    @Input() scrollDistance: number = 200;

    /**
     * User styles config object
     */
    @Input() styles: any = {};

    /**
     * Classes to be applied to the button
     */
    @Input() classNames: string = "go-top-button";

    /**
     * If true scrolling to top will be animated
     */
    @Input() animate: boolean = false;

    /**
     * Animated scrolling speed
     */
    @Input() speed: number = 80;

    /**
     * Acceleration coefficient, added to speed when using animated scroll
     */
    @Input() acceleration: number = 0;

    ngOnInit(){
        this.validateInputs();
    }

    private validateInputs() {
        const errorMessagePrefix = 'GoTopButton component input validation error: ';

        if(this.scrollDistance < 0){
            throw Error(errorMessagePrefix + "'scrollDistance' parameter must be greater or equal to 0");
        }

        if(this.speed < 1){
            throw Error(errorMessagePrefix + "'speed' parameter must be a positive number");
        }

        if(this.acceleration < 0){
            throw Error(errorMessagePrefix + "'acceleration' parameter must be greater or equal to 0");
        }

        if(typeof this.classNames !== "string") {
            throw Error(errorMessagePrefix + "'classNames' parameter must be a string like 'class1 class2 class3'");
        }
    };

    /**
     * Listens to window scroll and animates the button
     */
    @HostListener('window:scroll', [])
    onWindowScroll() {
        if(this.isBrowser()){
            this.animationState = this.getCurrentScrollTop() > this.scrollDistance ? 'in' : 'out';
        }
    };

    /**
     * Scrolls window to top
     * @param event
     */
    scrollTop(event: any) {
        if(!this.isBrowser()){
            return;
        }

        event.preventDefault();
        if (this.animate) {
            this.animateScrollTop();
        } else {
            window.scrollTo(0, 0);
        }
    };

    /**
     * Performs the animated scroll to top
     */
    animateScrollTop() {
        if(this.timerID !== null) {
            return;
        }

        let initialSpeed = this.speed;
        const that = this;

        this.timerID = setInterval(function() {
            window.scrollBy(0, -initialSpeed);
            initialSpeed = initialSpeed + that.acceleration;
            if (that.getCurrentScrollTop() === 0){
                clearInterval(that.timerID);
                that.timerID = null;
            }
        }, 15);
    };

    /**
     * Get current Y scroll position
     */
    getCurrentScrollTop() {
        if(typeof window.scrollY !== 'undefined' && window.scrollY >= 0){
            return window.scrollY;
        }

        if(typeof window.pageYOffset !== 'undefined' && window.pageYOffset >= 0){
            return window.pageYOffset;
        }

        if(typeof document.body.scrollTop !== 'undefined' && document.body.scrollTop >= 0){
            return document.body.scrollTop;
        }

        if(typeof document.documentElement.scrollTop !== 'undefined' && document.documentElement.scrollTop >= 0){
            return document.documentElement.scrollTop;
        }

        return 0;
    };

    /**
     * Get button style
     */
    getStyle() {
        return this.styles || {};
    };

    /**
     * This check will prevent 'window' logic to be executed
     * while executing the server rendering
     */
    isBrowser():boolean {
        return typeof (window) !== 'undefined';
    };
}
