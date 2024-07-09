import { loadRemoteModule } from '@angular-architects/native-federation';
import {
  Component, inject,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnateCardComponent, EnateCardService } from '@enate-card';

@Component({
  selector: 'en8-root',
  standalone: true,
  imports: [RouterOutlet, EnateCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  store = inject(EnateCardService);
  title = 'main';

  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  ngOnInit(): void {
    setTimeout(() => this.load(), 5000);
  }

  async load(): Promise<void> {
    const m = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.json',
      exposedModule: './Component',
    });
    const ref = this.viewContainer.createComponent(m.AppComponent);
    // const compInstance = ref.instance;
    // compInstance.ngOnInit()
  }
}
