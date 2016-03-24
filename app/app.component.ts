import { Component } from 'angular2/core';
import { Keg } from './keg.model'

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Keg</h1>
      <h3 *ngFor="#keg of kegs" (click)="kegWasSelected(keg)">{{ keg.description }}</h3>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs =  [
      new Keg("Black Butte Porter", 0),
      new Keg("Keystone Light", 1),
      new Keg("Red Elephant", 2)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
  console.log(clickedKeg);
  }
}
