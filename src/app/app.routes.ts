import { GetProduct } from "./get-product/get-product";
import { Login } from "./login/login";
import { Routes } from "@angular/router";
import { Ui } from "./ui/ui";

export const routes: Routes = [
  { path: "", component: Login },
  { path: "getProduct", component: GetProduct },
  { path: "ui", component: Ui },
];
