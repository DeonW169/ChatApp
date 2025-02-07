import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { Route } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  onJoin() {
    this.router.navigate(["/username"]);
  }
}
