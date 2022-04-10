import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
productID = 0;
data1:any;
productDetails:any;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data['id'];
      this.productService.viewIndividualProduct(this.productID).subscribe(data=>{
        this.productDetails = data;
        console.log(data);
      })
    })
  }

  updateProduct(form: any){
    console.log(form.value);
    let updatedValue = {
      id:form.value.product_id,
      title: form.value.product_name,
      category_id: form.value.product_category,
      descriptions: form.value.product_description,
      price: form.value.product_price,
      is_Available:form.value.product_available,
      rating: form.value.product_rating,
      review: form.value.product_reviews,
      vendor_name: form.value.product_vendor,
      warranty: form.value.product_warranty
    };
    this.productService.updateProduct(this.productID, updatedValue).subscribe(data=> {
      console.log(data);
    })
  }

}
