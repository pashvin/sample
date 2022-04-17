import { NgModule } from '@angular/core';
import { Pattern3Component } from './pattern3.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Pattern3Component },
];

@NgModule({
  declarations: [
    Pattern3Component,
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class Pattern3Module { }
