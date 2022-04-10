import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  // productList:Product = {
  //   productId: '',
  //   categoryId: 0,
  //   productName: '',
  //   description: '',
  //   rating: '',
  //   price: 0,
  //   productImg: '',
  //   isAvailable: true,
  //   color: '',
  //   review: 0
  // };
  productList:any;
  constructor(private productService: ProductsServiceService) { }

  ngOnInit(): void {
    this.productService.viewProduct().subscribe(data=>{
      this.productList = data;
    })
  }

}
