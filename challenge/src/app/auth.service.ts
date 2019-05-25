import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


interface myData {
  success: boolean,
  secret: string
}

interface registerResponse {
  success: boolean,
  secret: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false //LOCAL: JSON.parse(localStorage.getItem('loggedIn') || 'false')


  constructor( private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus=value
    //LOCAL: localStorage.setItem('loggedIn','true')
  }

  get isLoggedIn(){
    return this.loggedInStatus //LOCAL: JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())

  }


  getUserDetails(userEmail, userPassword){
    //post these details to API server return info if it's correct.
    return this.http.post<myData>('/api/login',{
      userEmail,
      userPassword
    })
  }

  registerUser( userEmail, userPassword){
    return this.http.post<registerResponse>('api/register',{
      userEmail, userPassword
    })
  }

} 
