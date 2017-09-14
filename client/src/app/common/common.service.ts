import { Injectable } from '@angular/core';
import { Grocery } from '../groceryadd/grocery.model'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonService {
	public groceryList: Grocery[]
	public add_subject=new Subject<String>()

	constructor(){
		this.groceryList = []
	}

	addGrocery(item){
		this.groceryList.push(new Grocery(item,false))
		this.add_subject.next()
	}
}