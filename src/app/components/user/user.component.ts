import { Component } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
  // styles: [
  //   `
  //     h2 {
  //       color: blue;
  //     }
  //   `
  // ],
  // template: "<h2>John Doe</h2>"
})
export class UserComponent {
  // Properties
  firstName = "John";
  lastName = "Doe";
  age = 30;

  // Methods
  constructor() {
    console.log("Hello User...");
  }
}
