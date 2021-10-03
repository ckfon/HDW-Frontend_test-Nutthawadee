import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/ProductModel';
import {ListProductModel} from 'src/app/model/ListProductModel';
import {NgForm,NgModel, Validators } from '@angular/forms';
import { SimpleStore } from 'src/app/simple.store';
import { AppService } from 'src/app/service/app.service';
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})
export class CreateproductComponent implements OnInit {
  //const listproduct = [];
  productData: ProductModel = {};
  param:ProductModel = {};
  //listproduct: ListProductModel =[this.productData];
  // orderFrom = new FormGroup({});
  // items = new FormArray([]);
  
 //let productmodel : ProductModel;
  //private listproduct:string[];
  constructor(private as: AppService,private route:ActivatedRoute) {
    
  }
  

  ngOnInit(){
    //this.param = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe(params =>{
      console.log(params);
      this.param  = params['id']
      console.log(this.param);
    });
    // this.orderFrom = this.formBuilder.group({
    //   items:this.formBuilder.array([this.createItem()])
    // });
  }
  // createItem(): FormGroup{
  //   return this.formBuilder.group({
  //     id:"",
  //     productName:"",
  //     img:"",
  //     price:0,
  //     detail:""
  //   });
  // }
  addNewList() {
    if (this.productData === '') {
      return;
    }
    this.as.addNewList(this.productData);
    this.productData = {};
  }



  // addItem(){
  //   const listproduct = [];
  
  //   console.log(this.productData);

  // }
  onSave(){
    // const listproduct = [];
    // listproduct.push(this.productData);
    console.log(this.productData);                  
      return true;
  }

  


}
