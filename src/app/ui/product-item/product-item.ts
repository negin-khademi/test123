import { Component } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-product-item",
  imports: [DecimalPipe],
  templateUrl: "./product-item.html",
  styleUrl: "./product-item.scss",
})
export class ProductItem {}
