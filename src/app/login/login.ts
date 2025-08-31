import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Shared } from "../shared";

@Component({
  selector: "app-login",
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: "./login.html",
  styleUrl: "./login.scss",
})
export class Login {
  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: Shared
  ) {}
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
          next: (res: any) => {
            console.log("Success", res);

            // Save the response to the service
            this.auth.setUserData(res);

            localStorage.setItem("token", res.model.token);
            localStorage.setItem("user", JSON.stringify(res.model.phone));

            // Navigate after successful login
            this.router.navigate(["getProduct"]);
            this.registerForm.reset();
          },
          error: (err) => {
            console.error("Error", err);
            alert("Login failed: " + err.message);
          },
        });
    } else {
      this.registerForm.markAllAsTouched();
      return;
    }
  }
}
