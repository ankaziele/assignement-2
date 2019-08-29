import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName = '';
  constructor() { 
    
  }

  ngOnInit() {
  }

  onUserNameChange = (event) => {
    this.userName = event.target.value
    console.log('this,userName', this.userName)
  }
  onUserNameAdded = () => {
    this.userName = "";
  }

}
