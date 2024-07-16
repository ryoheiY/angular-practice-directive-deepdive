import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {}
})
export class SafeLinkDirective {

  constructor() { 
    console.log("SafeLinkdirective is active");
  }



}
