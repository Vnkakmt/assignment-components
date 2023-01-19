import { Component, EventEmitter, Output } from '@angular/core';
import{PrimeNGConfig} from 'primeng/api'
import { Button } from 'primeng/button';
import { interval } from 'rxjs';

@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
constructor(private primeConfig:PrimeNGConfig){

}

ngOnInit(){
  this.primeConfig.ripple = true;
}

@Output() intevalFired = new EventEmitter<number>();
interval;
lastNumber = 0;

startGame(){
this.interval = setInterval(()=>{
this.intevalFired.emit(this.lastNumber + 1);
this.lastNumber++;
},1000);
}

pauseGame(){
  clearInterval(this.interval);
}


}
