import { Component, OnInit } from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit {
  users: any[] = [];
  hasUsers = false;
  chatMessage = "";
  user = "";
  message = "";

  constructor() {}

  ngOnInit() {
    //1. Get userList from localStorage
    //2. If userList exists then
    //  this.usert = JSON.parse(userList)
    let userList = localStorage.getItem("userList");
    if (userList) {
      this.users = JSON.parse(userList);
      this.hasUsers = true;
    }
  }

  loadChats() {}

  sendMessage() {
    if (this.chatMessage) {
      const chats = JSON.parse(localStorage.getItem("chats") || "[]");
      let chat = chats.find(
        (user: any) =>
          user.name === this.setSelectedUser &&
          user.surname === this.setSelectedUser
      );

      if (!chat) {
        chat = {
          name: this.setSelectedUser,
          surname: this.setSelectedUser,
          message: [],
        };
        chats.push(chat);
        this.saveChat();
      }
    }
  }

  saveChat() {
    let chat = {
      user: this.setSelectedUser,
      messages: this.message,

      message: {
        from: "Anroux",
        to: this.user,
        date: new Date().toISOString(),
        message: this.chatMessage,
      },
    };

    let chatString = JSON.stringify(chat);
    localStorage.setItem(`${this.user}`, chatString);
    this.chatMessage = "";
  }

  setSelectedUser(user) {
    debugger;
    this.user = `${user.name}-${user.surname}`;
    this.loadChats();
  }
}
