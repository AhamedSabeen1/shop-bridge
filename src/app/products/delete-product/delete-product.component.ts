import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productID=0;
  productDetails: any;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data['id'];
      this.productService.deleteProduct(this.productID).subscribe(data=>{
        console.log("Product has been deletd");
      })
    })
  }

}
