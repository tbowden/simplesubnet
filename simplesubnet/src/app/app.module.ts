import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NetaddressComponent } from './netaddress/netaddress.component';
import { NettableComponent } from './nettable/nettable.component';
import { Ipv4tableComponent } from './ipv4table/ipv4table.component';
import { Ipv6tableComponent } from './ipv6table/ipv6table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NetaddressComponent,
    NettableComponent,
    Ipv4tableComponent,
    Ipv6tableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
