import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'view-product', component: ViewProductComponent },
  { path: 'category/:id', component: ViewProductByCategoryComponent },
  { path: 'list-product', component: ViewAllProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgbModule],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }


/*
http://localhost:4200/order
http://localhost:4200/products/add
http://localhost:4200/products/view-product
http://localhost:4200/products/update-product
http://localhost:4200/products/delete-product
http://localhost:4200/products/view-product-by-category
http://localhost:4200/products/view-all-product
*/
