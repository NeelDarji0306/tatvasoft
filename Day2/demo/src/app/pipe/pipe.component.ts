import { Component, OnInit } from '@angular/core';

type EmployeesData = {
  name:string;
  address:string;
  contact:string,
  salary: number,
  joining:Date
}

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: [
  ]
})
export class PipeComponent implements OnInit {
  employees: EmployeesData[] | undefined;
  constructor() { 
    this.employees=[
      {name:"Neel",address:"Ahmedabad",contact:"9587558556",salary: 5000000000000,joining:new Date()},
      {name:"Vivek",address:"Noida",contact:"6115145565",salary: 5000000,joining:new Date()},
      {name:"Orry",address:"Pune",contact:"5451620560",salary: 50000,joining:new Date()},
    ]
  }

  ngOnInit(): void {
  }

}
