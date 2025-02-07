import { Component } from "@angular/core";
import {
  Router,
  RouterLink,
  RouterOutlet,
  RouterLinkActive,
} from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ChatApp";

  constructor(private router: Router) {}
}
