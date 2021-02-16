import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Material Design
import { materialDesign } from './materialDesign/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Component
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { TagComponent } from './tag/tag.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    TagComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    materialDesign,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
