import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parenthooks',
  templateUrl: './parenthooks.component.html',
  styles: [
  ]
})
export class ParenthooksComponent implements OnInit,DoCheck,OnDestroy,OnChanges {
  name : string;
  users : any[] | undefined | Object;
  subsription : Subscription | undefined;

  constructor(private client: HttpClient) { 
    console.log("Parent Constructor");
    this.name = "Neel";
  }

  ngDoCheck(): void {
    console.log("Parent DoCheck");
  }
  ngOnChanges(): void {
    console.log("Parent OnChanges");
  }

  ngOnInit(): void {
    console.log("Parent OnInit");
    const url = 'https://dummyjson.com/users';
    this.subsription = this.client.get<any[]>(url).subscribe(res => {
      if(res){
        this.users = res;
        console.log(this.users);
      }
    });
  }
  ngOnDestroy(): void {
    console.log("Parent OnDestroy");
    this.subsription?.unsubscribe();
  }

}
