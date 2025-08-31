import { Component } from "@angular/core";
import { Shared } from "../shared";

@Component({
  selector: "app-get-product",
  imports: [],
  templateUrl: "./get-product.html",
  styleUrl: "./get-product.scss",
})
export class GetProduct {
  userData: any;
  constructor(private auth: Shared) {
    this.userData = this.auth.getUserData();
  }
}
