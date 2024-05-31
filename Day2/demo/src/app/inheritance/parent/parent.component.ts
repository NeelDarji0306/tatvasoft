import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  constructor() {
    console.log("Parent: constructor");
   }

  ngOnInit(): void {
    console.log("Parent: ngOnInit");
  }

}
