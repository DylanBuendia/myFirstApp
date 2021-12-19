import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './components/section-header/section-header.component';



@NgModule({
  declarations: [
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports : [
    SectionHeaderComponent
  ]
})

export class SharedModule { }
