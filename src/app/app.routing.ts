import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { LandingPageComponent } from './costumer/landing/landing.component';


const appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'home', component: LandingPageComponent }

];
export const Routing = RouterModule.forRoot(appRoutes);
