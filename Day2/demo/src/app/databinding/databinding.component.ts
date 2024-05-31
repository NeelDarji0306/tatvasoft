import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [
  ]
})
export class DatabindingComponent implements OnInit {
  name : string;
  company : string | undefined;
  site: string;
  constructor() { 
    this.name = "Neel";
    this.company = "DNT";
    this.site = "https://www.github.com/neeldarji0306";
  }

  ngOnInit(): void {
  }
  Greet():void{
    alert(`Hello, ${this.name}`);
  }

}
