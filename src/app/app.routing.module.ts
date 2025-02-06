import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuchvsComponent } from './buchvs/buchvs.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'buchvs', pathMatch: 'full' },
  { path: 'buchvs', component: BuchvsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
