import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'ticket', component: TicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
