import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateRegistrationComponent } from './candidate-registration/candidate-registration.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminCandidateTableComponent } from './admin-candidate-table/admin-candidate-table.component';
import { ApiServiceGuard } from './service/apiservice.guard';


const routes: Routes = [

  { path: '', component: CandidateRegistrationComponent},
  { path: 'adminpanel', component: AdminPanelComponent },
  { path: 'table', component: AdminCandidateTableComponent, canActivate: [ApiServiceGuard] },
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
