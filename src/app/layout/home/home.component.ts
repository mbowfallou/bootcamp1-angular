import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { UserDto } from '../../models/userDto';
import { SearchResultComponent } from "../search-result/search-result.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, SearchResultComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  userList?: Array<UserDto>;

  searchUser(users: UserDto[]){
    this.userList = users;  
  }
}
