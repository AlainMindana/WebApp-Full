import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { TicketComponent } from './ticket/ticket.component';
// import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'ticket', component: TicketComponent },
  // { path: 'login', component: SecurityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
