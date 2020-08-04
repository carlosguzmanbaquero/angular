import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'tienda';

  items = ['carlos', 'alberto', 'guzman'];

  power = 2;

  constructor() { }

  ngOnInit(): void {
  }

  agregarItem(){
    this.items.push(this.title);
  }

  eliminarItem(index: number){
    this.items.splice(index, 1);
  }

}
