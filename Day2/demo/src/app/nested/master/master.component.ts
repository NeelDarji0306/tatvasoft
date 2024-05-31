import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styles: [
  ]
})
export class MasterComponent implements OnInit {
  company: string | undefined;
  constructor() { 
    this.company = 'DNT';
  }

  ngOnInit(): void {
  }
  GetData(message:string){
    alert(message);
  }

}
