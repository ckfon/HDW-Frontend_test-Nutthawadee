import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'product-list'},
  {path:'product-list',component:ProductComponent},
  {path:'add-product',component:CreateproductComponent},
  {path:'edit-product/:id',component:CreateproductComponent},
  //{path:'app-productdetail',component:},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
