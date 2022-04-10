import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-layout/category';
import { Product } from '../product';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  searchCategory: any;
  productList: any;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductsServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.searchCategory = data;
      console.log(this.searchCategory.id);
      this.productService.searchCategoryProduct(this.searchCategory.id).subscribe(category=>{
        console.log(category);
        this.productList = category;
      })
    })
  }

}
