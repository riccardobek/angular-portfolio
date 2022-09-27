import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  private dimensionWindow = new Subject<boolean>();

  getIsMobile = () =>{
    this.dimensionWindow.asObservable();
  }

  setIsMobile = (value:boolean) =>{
    this.dimensionWindow.next(value);
  }
}
