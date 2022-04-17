import { NgModule } from '@angular/core';
import { Pattern4Component } from './pattern4.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Pattern4Component },
];

@NgModule({
  declarations: [
    Pattern4Component,
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class Pattern4Module { }
