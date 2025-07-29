import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SearchComponent } from '../search-component/search-component';

@Component({
  selector: 'app-home-component',
  imports: [RouterLink, RouterLinkActive, SearchComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

}
