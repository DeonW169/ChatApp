import { NgModule } from "@angular/core";
import { Routes, RouterModule, RouterLink } from "@angular/router";
import { UsernameComponent } from "./username/username.component";
import { ChatComponent } from "./chat/chat.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "username", component: UsernameComponent },
  { path: "chat", component: ChatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
