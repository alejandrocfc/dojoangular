import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarLeftComponent } from './side-bar-left/side-bar-left.component';
import { SideBarRightComponent } from './side-bar-right/side-bar-right.component';
import { HomeComponent } from './home/home.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SideBarLeftComponent,
    SideBarRightComponent,
    HomeComponent,
    Menu1Component,
    Menu2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
