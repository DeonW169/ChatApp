import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgModelGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-username",
  templateUrl: "./username.component.html",
  styleUrls: ["./username.component.scss"],
})
export class UsernameComponent implements OnInit {
  users = [];

  usernameForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // let user = {
    //   name: "Anroux",
    //   surname: "Bezuidenhout",
    // };
    // let user2 = {
    //   name: "Ivan",
    //   surname: "Bezuidenhout",
    // };
    // this.users.push(user2);
  }

  ngOnInit() {
    this.usernameForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(50)]],
      surname: [null, [Validators.required, Validators.maxLength(50)]],
    });

    const storedName = localStorage.getItem("name");
    const storedSurname = localStorage.getItem("surname");
    // if (storedName) {
    //   this.usernameForm.patchValue({ name: storedName });
    // }
    // if (storedSurname) {
    //   this.usernameForm.patchValue({ surname: storedSurname });
    // }

    //1. let userListValues = localStorage.getItem("userList");
    // if (userListValues) {
    //2. this.users = JSON.parse(userListValues);
    // }

    //3. let user = {
    // name: this.userForm.value.name,
    // surname: this.usernameForm.value.surname}

    //4. this.users.push(user);

    //5. let userListString = JSON.stringify(this.users);
    //6. localStorage.setItem("userList", userListString);
  }

  onContinue() {
    // get userList from localStorage
    //convert string to JSON object
    //create new user object from form
    //push user to array
    //convert JSON array to string
    //save string to localStorage
    let userListValues = localStorage.getItem("userList");
    if (userListValues) {
      this.users = JSON.parse(userListValues);
    }

    let user = {
      name: this.usernameForm.value.name,
      surname: this.usernameForm.value.surname,
    };
    this.users.push(user);

    let userListString = JSON.stringify(this.users);
    localStorage.setItem("userList", userListString);

    if (this.usernameForm.valid) {
      localStorage.setItem("name", this.usernameForm.get("name")?.value);
      localStorage.setItem("surname", this.usernameForm.get("surname")?.value);
      this.router.navigate(["/chat"]);
    }
  }
}
