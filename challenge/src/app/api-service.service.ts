import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  printToConsole(arg){
    console.log(arg)
  }
}
