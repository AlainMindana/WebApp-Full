import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { TicketComponent } from './ticket/ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import { SecurityComponent } from './security/security.component';

@NgModule({
  declarations: [AppComponent, EmployeeComponent, TicketComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
