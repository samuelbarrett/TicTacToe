// 	Square component
//
//	This is a UI component, or "dumb component" meaning it is simple: no modification of its own state, all comes from parent (caller)

import { Component, Input } from '@angular/core';

// every component starts with a TypeScript decorator : allows us to pass in an object that configures how this component behaves.
@Component({
  selector: 'app-square',	// how we reference the component in html

  // where status is the type of nbButton (the color is affected, view Nebular nbButton documentation for all button styles)
  template: `
    <button nbButton *ngIf="!value">{{value}}</button>
	<button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
	<button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [
	  `button {
		  width: 100%;
		  height: 100%;
		  font-size: 5em;
	  }`
  ]
})
export class SquareComponent {

	// accepts input from parent (caller, see app.component.html). Can only be X or O.
	@Input() value!: 'X' | 'O';

}
