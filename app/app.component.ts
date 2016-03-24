import { Component } from 'angular2/core';

//annotation
@Component({
  selector: 'my-app',
  template: `
    <h1>Keg Form</h1>
    <h3>{{ kegs.description }}
  `
})
//Controller class Definition
export class AppComponent {
  public kegs: Keg[]; //an array of Key Objects
  constructor(){
    this.kegs = [
      new Keg("Black Butte Porter", 124)
    ]
  }
}
