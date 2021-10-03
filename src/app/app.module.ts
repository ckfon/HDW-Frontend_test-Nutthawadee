import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatIconTestingModule} from '@angular/material/icon/testing'; 
import {MatDialogModule} from '@angular/material/dialog'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ToolbarproductComponent } from './components/toolbarproduct/toolbarproduct.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { FormsModule } from '@angular/forms';
import { DialogproductComponent } from './components/dialogproduct/dialogproduct.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppService } from './service/app.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductdetailComponent,
    ToolbarproductComponent,
    CreateproductComponent,
    DialogproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    MatIconTestingModule,
    MatDialogModule,
    NgbModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
