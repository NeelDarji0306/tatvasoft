import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent implements OnInit {
  //using input decorator
  @Input() myCompany: string | undefined;
  //using output decorator
  @Output() msg: EventEmitter<string> 
  constructor() { 
    this.msg = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }
  SendData(){
    this.msg.emit('Hi, from nested');
  }

}
