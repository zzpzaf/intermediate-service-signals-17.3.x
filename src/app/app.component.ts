import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Test1Component, Test2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public compName = this.constructor.name.replace('_','');
  constructor() {}

  // title = 'signals1';
  title = 'Angular 17.x Application: intermediate-service using signals';
}
