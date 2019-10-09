import { Component, OnInit } from '@angular/core';

import { AppController } from '../../../app.controller';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent extends AppController implements OnInit {

  public notes = [
    {
      id: 234,
      title: 'Note 234'
    },
    {
      id: 345,
      title: 'Note 345'
    }
  ];

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
