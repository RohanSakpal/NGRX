import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CounterContainerComponent } from './component/counter-container/counter-container.component';
import { BlogContainerComponent } from './component/blog-container/blog-container.component';
import { EditblogComponent } from './component/editblog/editblog.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'counter',component:CounterContainerComponent},
    {path:'blog',component:BlogContainerComponent},
    {path:'blog/edit/:id',component:EditblogComponent}
];
