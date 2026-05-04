import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl:'./components/playing-card/playing-card.html',
  styleUrl:'./app.css'
})
export class App {
  protected readonly title = signal('angularStack');
}
