import { DecimalPipe } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-ui",
  imports: [DecimalPipe],
  templateUrl: "./ui.html",
  styleUrl: "./ui.scss",
})
export class Ui {}
