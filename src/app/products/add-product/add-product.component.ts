import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private productService: ProductsServiceService) { }
  isNewForm=true;

  ngOnInit(): void {
    this.isNewForm = true;
  }

  addNewProduct(form: any){
    console.log(form.value);
    let newProduct = {
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
    this.productService.createProduct(newProduct).subscribe(data=>{
      console.log(data);
      this.isNewForm = false;
    })
  }
}
