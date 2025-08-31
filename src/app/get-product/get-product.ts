import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Shared } from "../shared";

@Component({
  selector: "app-get-product",
  imports: [],
  templateUrl: "./get-product.html",
  styleUrl: "./get-product.scss",
})
export class GetProduct {
  userData: any;
  constructor(
    private auth: Shared,
    private router: Router,
    private http: HttpClient
  ) {
    this.userData = this.auth.getUserData();
  }
  showResult() {
    const token = this.userData?.model?.token || localStorage.getItem("token");

    if (!token) {
      console.error("No token found");
      return;
    }

    this.http
      .post(
        "https://localhost:7097/api/Managment/test",
        {}, // body can be empty
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .subscribe({
        next: (res: any) => {
          console.log("Success: token is valid", res);
        },
        error: (err) => {
          console.error("Error: token invalid or expired", err);
        },
      });
  }
}
