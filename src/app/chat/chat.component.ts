import { Component, OnInit } from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit {
  users: any[] = [];
  messages: any[] = [];
  hasUsers = false;
  hasChatHistory = false;
  chatMessage = "";
  user = "";

  constructor() {}

  ngOnInit() {
    let userList = localStorage.getItem("userList");
    if (userList) {
      this.users = JSON.parse(userList);
      this.hasUsers = true;
    }

    const defaultUser = this.users[1];
    this.user = `${defaultUser.name}-${defaultUser.surname}`;
    this.getChatHistroy();
  }

  sendMessage() {
    const message = {
      from: "Anroux",
      to: this.user,
      date: new Date().toISOString(),
      message: this.chatMessage,
    };

    let chat = {
      messages: [message],
    };

    if (this.hasChatHistory) {
      this.messages.push(message);
      chat.messages = this.messages;
    }
    this.saveChat(chat);
  }

  getChatHistroy() {
    let chat = localStorage.getItem(`${this.user}`);
    if (chat) {
      this.messages = JSON.parse(chat).messages;
      this.hasChatHistory = true;
      // return true;
    } else {
      this.messages = [];
      this.hasChatHistory = false;
      // return false;
    }
    // return false;
  }

  saveChat(messages) {
    let chatString = JSON.stringify(messages);
    localStorage.setItem(`${this.user}`, chatString);
    this.chatMessage = "";
  }

  setSelectedUser(user) {
    this.user = `${user.name}-${user.surname}`;
    this.getChatHistroy();
  }
}
