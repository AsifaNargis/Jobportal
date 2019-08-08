import { Component, OnInit } from '@angular/core';
import {CompService} from '../comp.service';
import {Comp} from '../comp';
import {COMP} from '../comp-stock';

@Component({
  selector: 'app-jobport',
  templateUrl: './jobport.component.html',
  styleUrls: ['./jobport.component.css']
})
export class JobportComponent implements OnInit {

 private currentStock : Comp;
  constructor(private compservice : CompService) { }
  private pastStock : Comp[] = [];
  ngOnInit() {
  }
  getStock(skill : string) : void{
  	 this.currentStock = this.compservice.getStock(skill);
  	 this.currentStock.searchTime = (new Date()).toTimeString();
  	 this.pastStock.push(this.currentStock);
  }
}