import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { ProductModel } from '../model/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  rawData = [] as any;

  //private list = new BehaviorSubject<string[]>([]);
  private list = new BehaviorSubject<{}>([]);
  readonly list$ = this.list.asObservable();
  
  

  constructor() {
      
  }
  addNewList(list: ProductModel): void {
    console.log(list);
    let rawDatas  : ProductModel[] = [];
   
    rawDatas= JSON.parse(sessionStorage.getItem("items") || '{}');
    if(rawDatas.length == undefined){
      let rawDatas  : ProductModel[] = [];
      sessionStorage.setItem("items", JSON.stringify(rawDatas));
      rawDatas= JSON.parse(sessionStorage.getItem("items") || '{}');
      rawDatas.push(list);
      sessionStorage.setItem("items", JSON.stringify(rawDatas));
    }else{
      rawDatas= JSON.parse(sessionStorage.getItem("items") || '{}');
      rawDatas.push(list);
      sessionStorage.setItem("items", JSON.stringify(rawDatas));
      console.log(rawDatas);
    }
    //rawDatas= JSON.parse(sessionStorage.getItem("items") || '{}');

    // rawDatas.push(list);
    // sessionStorage.setItem("items", JSON.stringify(rawDatas));
   
    //sessionStorage.setItem("items",rawDatas);
}
removeList(list: ProductModel): void {
  let rawDatas  : ProductModel[] = [];
  rawDatas= JSON.parse(sessionStorage.getItem("items") || '{}');
  //rawDatas =  sessionStorage.getItem("items");
  console.log(list);
  //rawDatas = rawDatas.filter((v:ProductModel) => v !== list);
  for (let index = 0; index < rawDatas.length; index++) {
    const element = rawDatas[index];
    if(element.id === list.id){
      rawDatas.splice(index,1);
    }
    
  }
  console.log(rawDatas);
  rawDatas = rawDatas.slice();
  sessionStorage.setItem("items", JSON.stringify(rawDatas));
  //sessionStorage.setItem("items",rawDatas);
  //this.list.next(this.rawData);
  location.reload();
}
getDetailbyId(id:String ):ProductModel {
  let rawDatas  : ProductModel[] = [];
  let model : ProductModel = {} ;
  rawDatas= JSON.parse(sessionStorage.getItem("items") || '{}');
  for (let index = 0; index < rawDatas.length; index++) {
     const element = rawDatas[index];
     if(element.id === id){
      model = element;
        //return element;
     }
     
  }
  return model;
}

updateProduct(list: ProductModel): void {
  let rawDatas  : ProductModel[] = [];
  rawDatas= JSON.parse(sessionStorage.getItem("items") || '{}');
  for (let index = 0; index < rawDatas.length; index++) {
    let element = rawDatas[index];
    if(element.id === list.id){
      element = list;
   }
  }
  
  //rawDatas.push(list);
  sessionStorage.setItem("items", JSON.stringify(rawDatas));
}

  // addNewList(list: any) {
  //   console.log(list);
  //   this.rawData.push(list);
  //   this.list.next(this.rawData);
  // }

  // removeList(list: any) {
  //   this.rawData = this.rawData.filter(v => v !== list);
  //   this.list.next(this.rawData);
  // }
  
}