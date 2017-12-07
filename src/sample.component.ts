import { Component } from '@angular/core';

@Component({
  selector: 'sample-component',
  template: `<h1>Sample component cambio en test {{prueba}}</h1>`
})
export class SampleComponent {
  prueba: string = "Jairo";
  constructor() {
  }

}
