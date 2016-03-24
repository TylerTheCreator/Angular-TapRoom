import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model'

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  template: `
  <h3 *ngFor="#currentKeg of kegList"
      (click)="kegClicked(currentKeg)"
      [class.selected]="curretKeg === selectedKeg">
      {{ currentKeg.description }}
  </h3>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
}
@Component({
  selector: 'my-app',
  directives: [KegListComponent],
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
  console.log('parent', clickedKeg);
  }
}
