import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout-component',
  templateUrl: './logout-component.component.html',
  styleUrls: ['./logout-component.component.css']
})
export class LogoutComponentComponent implements OnInit {

  constructor(private user: UserService, private router: Router, private auth: AuthService) { }

  ngOnInit() {

    this.user.logout().subscribe(data => {
      if(data.success){
        this.router.navigate([''])
        this.auth.setLoggedIn(false)
      }else{
        window.alert("UPS! We have some problems :/.")
      }
    })
  }

}
