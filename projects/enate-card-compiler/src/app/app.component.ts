import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnateCardComponent, EnateCardService } from '@enate-card';

@Component({
  selector: 'en8-root',
  standalone: true,
  imports: [RouterOutlet, EnateCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  store = inject(EnateCardService);
  title = 'enate-card-compiler';
}
