import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from './components/search/search.component';
import { SortButtonComponent } from './components/sort-button/sort-button.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

import { FilterElementsPipe } from './pipes/filterElements.pipe';
import { SortElementsPipe } from './pipes/sortElements.pipe';

import { ProductsJSONService, ProductsServiceToken } from './services/products.service';

export * from './interfaces';
export * from './utils';
export * from './validators';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    SearchComponent,
    SortButtonComponent,
    OrderFormComponent,

    FilterElementsPipe,
    SortElementsPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [
    {
      provide: ProductsServiceToken,
      useClass: ProductsJSONService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
