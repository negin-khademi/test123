import { GetProduct } from "./get-product/get-product";
import { Login } from "./login/login";
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", component: Login },
  { path: "getProduct", component: GetProduct },
];
