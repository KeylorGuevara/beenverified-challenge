import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(event){
    event.preventDefault()
    const errors = []
    const target = event.target
    const userName = target.querySelector("#name").value    
    const userEmail = target.querySelector("#email").value
    const userPassword = target.querySelector("#password").value
    const userCPassword = target.querySelector("#confirmPassword").value

    if(userPassword != userCPassword){
      errors.push("Passwords do not match.")
    }

    //If we want to add more validations... just do it!
    if(errors.length === 0){
      this.auth.registerUser(userEmail,userPassword).subscribe(data =>{
        console.log(data)
        if(data.success){
          this.router.navigate(['dashboard'])
        }
      })
    }
    console.log(userEmail,userPassword)
  }
}
