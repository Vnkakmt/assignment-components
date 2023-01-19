import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];

  title = 'assignment-components';
  constructor(private primengConfig:PrimeNGConfig) {
  }

  
  ngOnInit(){
      this.primengConfig.ripple = true;
  }

  eventFromStartGame(receivedNumber:number){
    if(receivedNumber%2 === 0){
      this.evenNumbers.push(receivedNumber);
    }
    else{
      console.log(receivedNumber);
      this.oddNumbers.push(receivedNumber);
    }
    //console.log(receivedNumber);
  }

}
