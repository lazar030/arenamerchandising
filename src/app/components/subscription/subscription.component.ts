import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-subscription",
  templateUrl: "./subscription.component.html",
  styleUrls: ["./subscription.component.scss"]
})
export class SubscriptionComponent implements OnInit {
  email: string = "";
  regExp: RegExp = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
  );

  isEmail: boolean = false;

  constructor() {}

  ngOnInit() {}

  onChange(email) {
    const test = this.regExp.test(email);
    if (test) {
      this.isEmail = true;
    } else {
      this.isEmail = false;
    }
  }

  onSubmit(email: any) {
    console.log(email);
  }
}
