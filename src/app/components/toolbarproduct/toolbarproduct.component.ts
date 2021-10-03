import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbarproduct',
  templateUrl: './toolbarproduct.component.html',
  styleUrls: ['./toolbarproduct.component.scss']
})
export class ToolbarproductComponent  {
  check : number = 0;

  constructor() { }

 
  onClickCreateProduct(){
    this.check = 1;
  }

  onClickProduct(){
    this.check = 2;
  }

}
