import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-childhooks',
  templateUrl: './childhooks.component.html',
  styles: [
  ]
})
export class ChildhooksComponent implements OnInit,OnChanges {
  @Input() myName: string | undefined;
  constructor() { 
    console.log('Child constructor');
  }
  ngOnChanges(): void {
    console.log('Child ngOnChanges');
  }
  ngOnInit(): void {
    console.log('Child ngOnInit');
  }

}
