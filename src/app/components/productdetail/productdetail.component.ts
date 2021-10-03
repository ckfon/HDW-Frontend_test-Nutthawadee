import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductModel } from 'src/app/model/ProductModel';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent  {
  //data :ProductModel;

  constructor(@Inject(MAT_DIALOG_DATA)
  public data: ProductModel
) { }

  

}
