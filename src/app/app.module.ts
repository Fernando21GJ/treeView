import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'; // Asegúrate de agregar esta importación
import { MatCardModule } from '@angular/material/card'; 
import { FormsModule } from '@angular/forms';
import { FileBrowserComponent } from './file-browser/file-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    FileBrowserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
