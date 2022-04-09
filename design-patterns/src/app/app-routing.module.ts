import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pattern1Component } from './routes/pattern1/pattern1.component';
import { Pattern2Component } from './routes/pattern2/pattern2.component';

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'first', component: Pattern1Component },
  { path: 'second', component: Pattern2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
