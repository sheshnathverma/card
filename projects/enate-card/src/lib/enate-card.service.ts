import { Injectable, signal } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnateCardService {
  ticker = signal<number>(0);

  constructor() {
    interval(1000).subscribe(() => this.ticker.update((o) => o + 1));
  }
}
