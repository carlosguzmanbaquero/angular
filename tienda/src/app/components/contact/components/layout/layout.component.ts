import { Component, OnInit } from '@angular/core';
import { GeneratorService } from './../../../../core/services/generator.service';
import { EmployeeData } from './../../../../model/employee.model'


const names = ['carlos', 'alberto', 'carolina', 'maria'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  salesList: EmployeeData[] = [];
  developeList: EmployeeData[] = [];

  constructor(private generatorService: GeneratorService) { }

  ngOnInit(): void {
    this.salesList = this.generatorService.generate(names, [10, 16], 10);
    this.developeList = this.generatorService.generate(names, [10, 16], 10);
  }

  addItem(list: EmployeeData[], label: string){
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 16])
    });
  }

}
