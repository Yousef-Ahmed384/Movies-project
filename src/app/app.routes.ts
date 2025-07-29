import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { WatchlistComponent } from './watchlist-component/watchlist-component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'watchlist', component:WatchlistComponent}
];
