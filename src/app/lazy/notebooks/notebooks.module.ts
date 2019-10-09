import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NoteComponent } from './note/note.component';
import { NotebooksRoutingModule } from './notebooks-routing.module';
import { NotebooksComponent } from './notebooks.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    NotebooksComponent,
    NotesComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    NotebooksRoutingModule
  ]
})
export class NotebooksModule { }
