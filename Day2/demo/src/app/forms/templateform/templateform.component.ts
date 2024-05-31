import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/models/user';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styles: [
  ]
})
export class TemplateformComponent implements OnInit {
  user: User;
  constructor() {
    this.user = new User();
   }

  ngOnInit(): void {
  }
  saveData(form: NgForm){
    if(form.valid){
      console.log(this.user);
    }
  }
}
