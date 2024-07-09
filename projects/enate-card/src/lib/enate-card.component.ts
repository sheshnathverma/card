import { Component, inject } from '@angular/core';
import { EnateCardService } from './enate-card.service';

@Component({
  selector: 'en8-enate-card',
  standalone: true,
  imports: [],
  template: `
    <div>This is ticker from card lib : {{ store.ticker() }}</div>
    @if(store.ticker()%2 === 0) {
    <h1>Even</h1>
    } @else {
    <h1>Odd</h1>
    }
  `,
  styles: ``,
})
export class EnateCardComponent {
  store = inject(EnateCardService);
}
