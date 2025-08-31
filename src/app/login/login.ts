import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: "./login.html",
  styleUrl: "./login.scss",
})
export class Login {
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit() {
    this.registerForm.reset({
      phone: "",
      password: "",
    });
  }
  registerForm = new FormGroup({
    phone: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });
  onSubmitForm() {
    if (this.registerForm.valid) {
      const { phone, password } = this.registerForm.value;

      const data = this.registerForm.value;
      console.log(data, "gcdchdsgc");
      // Call local API
      this.http
        .post("https://localhost:7097/api/Managment/signin", data)
        .subscribe({
          next: (res) => console.log("Success", res),
          error: (err) => console.error("Error", err),
        });

      // Save to localStorage
      localStorage.setItem("username", phone || "");
      localStorage.setItem("password", password || "");

      console.log("Saved to localStorage:", phone, password);
      this.router.navigate(["getProduct"]);
      this.registerForm.reset();
    } else {
      this.registerForm.markAllAsTouched();
      return;
    }
  }
}
