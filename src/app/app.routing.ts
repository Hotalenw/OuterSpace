import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SunComponent} from './components/sun/sun.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sun', component: SunComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);
