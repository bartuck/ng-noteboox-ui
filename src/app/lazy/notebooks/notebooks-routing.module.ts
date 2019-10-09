import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppController } from '../../app.controller';
import { routerConfig } from '../../core/config/router-config.const';
import { NoteComponent } from './note/note.component';

import { NotebooksComponent } from './notebooks.component';
import { NotesComponent } from './notes/notes.component';

const trans = AppController.trans();

const routes: Routes = [
  {
    path: '',
    component: NotebooksComponent,
    children: [
      {
        path: `:${routerConfig.notebooks.params.notebookId}`,
        component: NotesComponent,
        data: {
          title: trans.notes
        },
        children: [
          {
            path: `${routerConfig.notebooks.note}/:${routerConfig.notebooks.params.noteId}`,
            component: NoteComponent,
            data: {
              title: trans.note
            },
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotebooksRoutingModule {
}
