import { Injectable } from '@angular/core';
import {Comp} from './comp';
import {COMP} from './comp-stock';

@Injectable()
export class CompService {

   private stockData : Comp[] = COMP;
  constructor() { }
getStock(skill : String): Comp{
	for(var i=0; i<this.stockData.length; i++)
	{
		if(skill === this.stockData[i].skill)
		{
		//alert(this.stockData[i].values);
		return this.stockData[i];
	    }
	}
}
}