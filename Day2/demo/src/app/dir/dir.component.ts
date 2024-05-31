import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styles: [
    `
    .red-class {
      color: red;
    }
    `
  ]
})
export class DirComponent implements OnInit {
  num:number;
  colors: string[] | undefined;
  color: string | undefined;
  constructor() {
    this.num = 2;
    this.colors = ['red', 'green', 'blue'];
    this.color = '';
   }

  ngOnInit(): void {
  }

}
