import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private user: UserService, private router: Router, private apiService: ApiServiceService, private http: HttpClient ) { }

  quote= "Loading your profile..."
  email= "Your email.has been found!"
  private urlApi="/hk/dd/teaser/email?email=skip.sudva@beenverified.com"

  ngOnInit() {
    
    let obs = this.http.get("/hk/dd/teaser/email?email=skip.sudva@beenverified.com")
    obs.subscribe((response)=> console.log(response))



    this.user.getData().subscribe(data =>{
      if(data.status){

      this.quote = data.quote
      this.email= data.email
    }
    else{
      this.router.navigate(['logout'])
    }
    })
  }
}
