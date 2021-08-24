import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about.component';
import { ContactComponent } from './components/contact.component';
import { EmployeeComponent } from './components/employee.component';
import { HomeComponent } from './components/home.compinent';
import { ServicesComponent } from './components/services.component';

const APP_ROUTES: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'services', component:ServicesComponent},

    //ruta con parametros
    {path:'employee/:id', component:EmployeeComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);