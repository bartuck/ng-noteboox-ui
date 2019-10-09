import { Component, OnInit } from '@angular/core';
import { AppController } from '../../app.controller';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.scss']
})
export class NotebooksComponent extends AppController implements OnInit {

  public notebooks = [
    {
      id: 12,
      title: 'Mieszkanie 12'
    },
    {
      id: 23,
      title: 'Praca 23'
    },
    {
      id: 34,
      title: 'Kuchnia 34'
    }
  ];

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
