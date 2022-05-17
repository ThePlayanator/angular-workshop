import { Component } from '@angular/core';
import { BasicService } from '../basic.service';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent  {

  tempVal = 0;

  constructor(private basicService: BasicService) { }

  setValForService(hie: HTMLInputElement) {
    this.basicService.setNum(parseInt(hie.value));
  }

  getValFromService(){
    this.tempVal = this.basicService.getNum();
  }

}
