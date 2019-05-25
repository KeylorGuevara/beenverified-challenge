import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor( private Auth:AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    let obs = this.http.get("/hk/dd/teaser/email?email=skip.sudva@beenverified.com")
    obs.subscribe((response)=> console.log(response))
  }



  loginUser(event){
    event.preventDefault()
    const target = event.target    
    const userEmail = target.querySelector("#email").value
    const userPassword = target.querySelector("#password").value
    
    this.Auth.getUserDetails(userEmail,userPassword).subscribe(data => {
      if(data.success){
        //go to Admin
        this.router.navigate(['dashboard'])
        this.Auth.setLoggedIn(true)

      }
      else{
        window.alert(data.secret)
      }
    })
    console.log(userEmail,userPassword)

  }

}
