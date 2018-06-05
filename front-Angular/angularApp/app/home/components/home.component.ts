import { Component } from '@angular/core';


@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html'
})
export class HomeComponent  {
  message: string;

  constructor() {
    this.message = 'Prueba alexis montaña ramirez';
  }
}
