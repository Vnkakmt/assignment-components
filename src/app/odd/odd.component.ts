import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {
  @Input() number:number;  //the number is going to be passed from outside

  constructor(){}

  ngOnInit(){

  }

}
