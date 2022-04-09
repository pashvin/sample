import { NgModule } from '@angular/core';
import { Pattern2Component } from './pattern2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Pattern2Component },
];

@NgModule({
  declarations: [
    Pattern2Component,
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class Pattern2Module { }
