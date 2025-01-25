import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PrincipalComponent } from './pages/principal/principal.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'registro',component:RegistroComponent},
    {path:'principal',component:PrincipalComponent},
    {path:'**',redirectTo:'login'}
];
