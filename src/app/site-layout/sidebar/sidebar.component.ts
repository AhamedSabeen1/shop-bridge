import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/products/products-service.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categoryList:any;
  constructor(private productService: ProductsServiceService) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(data=>{
      this.categoryList = data;
    })
  }

}
