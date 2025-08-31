import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class Shared {
  private _userData: any; // store the data from login

  setUserData(data: any) {
    this._userData = data;
  }

  getUserData() {
    return this._userData;
  }
}
