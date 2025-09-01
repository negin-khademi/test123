import { Component, Input } from "@angular/core";

@Component({
  selector: "app-accardion",
  imports: [],
  templateUrl: "./accardion.html",
  styleUrl: "./accardion.scss",
})
export class Accardion {
  @Input({
    required: true,
  })
  accData!: any;
}
