import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
productID = 0;
productData:any;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data['id'];
    this.productService.viewIndividualProduct(this.productID).subscribe(data=>{
      this.productData = data;
    })
    })
  }

}
