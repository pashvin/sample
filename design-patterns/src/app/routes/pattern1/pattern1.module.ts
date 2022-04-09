import { NgModule } from '@angular/core';
import { Pattern1Component } from './pattern1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Pattern1Component },
];

@NgModule({
  declarations: [
    Pattern1Component,
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class Pattern1Module { }
