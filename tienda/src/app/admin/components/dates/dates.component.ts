import { Component, OnInit } from '@angular/core';

//import * as moment from 'moment';
import { addDays, format } from 'date-fns';

@Component({
  selector: 'app-dates',
  template: `<h1>{{ date }}</h1>`,
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  date: string;

  constructor() { }

  ngOnInit() {
    //this.date = moment().add(20, 'days').format('YYYY/MMMM/DD');
    const fecha = addDays(new Date(), 20);
    this.date = format(fecha, 'YYYY/MMMM/DD');
  }

}
