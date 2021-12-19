import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"


const routes : Routes = [
  {path: 'projects', loadChildren: () => import ('./modules/project/project.module').then(m=> m.ProjectModule)},
  {path : '', redirectTo : '/home', pathMatch : 'full'},
  {path : '**', redirectTo : '/home',}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
