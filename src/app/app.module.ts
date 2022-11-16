import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { NoteCardComponent } from './note-card/note-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NoteDetailsComponent,
    NoteListComponent,
    NoteCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }