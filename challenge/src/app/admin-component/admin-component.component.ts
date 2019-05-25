import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {

  constructor( private user: UserService) { }

  message= "Loading..."

  ngOnInit() {
   // this.user.getData().subscribe(data => {
     // this.message=data.secret
     // if(!data.success){
       // localStorage.removeItem('loggedIn')
      //}
    //})

  }

}
