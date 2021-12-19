import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule {}
