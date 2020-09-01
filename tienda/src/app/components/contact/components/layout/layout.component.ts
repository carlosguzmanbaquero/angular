import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneratorService } from './../../../../core/services/generator.service';
import { EmployeeData } from './../../../../model/employee.model'
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';


const names = ['carlos', 'alberto', 'carolina', 'maria'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  salesList: EmployeeData[] = [];
  developeList: EmployeeData[] = [];

  //value: number;

  //sub$: Subscription;

  value$: Observable<number>;

  constructor(private generatorService: GeneratorService) {
    this.value$ = this.generatorService.getData()
    .pipe(
      tap(value => {
      console.log('llamado generateData');
      })
    );
   }

  ngOnInit(): void {
    this.salesList = this.generatorService.generate(names, [10, 16], 10);
    this.developeList = this.generatorService.generate(names, [10, 16], 10);
    
    /*
    this.sub$ = this.generatorService.getData()
    .subscribe(value => {
      this.value = value;
      console.log('value interval');
    });
    */
  }

  addItem(list: EmployeeData[], label: string){
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 16])
    });
  }

  ngOnDestroy(){
    console.log('onDestroy');
    //this.sub$.unsubscribe();
  }

}
