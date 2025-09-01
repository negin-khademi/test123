import { DecimalPipe } from "@angular/common";
import { Component } from "@angular/core";
import { ProductItem } from "./product-item/product-item";

@Component({
  selector: "app-ui",
  imports: [DecimalPipe, ProductItem],
  templateUrl: "./ui.html",
  styleUrl: "./ui.scss",
})
export class Ui {}
