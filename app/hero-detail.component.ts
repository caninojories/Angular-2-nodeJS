import {Component, Input} from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="heroObject">
      <h2>{{heroObject.name}} details!</h2>
      <div><label>id: </label>{{heroObject.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="heroObject.name" placeholder="name"/>
      </div>
    </div>
  `,
  /**
   * No locigal evaluation of the input
   * inputs: ['hero']
   * then declare this at the class
   * hero: Hero;
   *
   */
})

export class HeroDetailComponent {
  /**
   * Use this if there is locigal evaluation of the input
   */
  @Input('hero') heroObject: Hero;
}
