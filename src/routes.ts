import { Routes } from '@angular/router';
import { LoginForm } from './parts/Login/Login';
import { Dashboard } from './parts/Dashboard/Dashboard';
import { Home } from './parts/Home/Home';
import { Signup } from './parts/Signup/Signup';
import { Profile } from './parts/Profile/Profile';
import { Settings} from './parts/Settings/Settings';

export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginForm },
	{ path: 'home', component:  Home },
	{ path: 'signup', component: Signup},
	{ path: 'profile', component: Profile },
	{ path: 'settings', component: Settings }
]