import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar-component/nav-bar-component';
import { SearchComponent } from './search-component/search-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, SearchComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movies-app');
}
