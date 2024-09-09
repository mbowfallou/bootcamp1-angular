import { Component, EventEmitter, Output } from '@angular/core';
import { UserDto } from '../../models/userDto';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
 
  @Output() searchEvent = new EventEmitter<UserDto[]>();

  constructor(private userService: UserService){}

  get(valeur: number){
    //this.searchEvent.emit(this.allUsers); 
    const allUsers = this.userService.getUsers();

    if(allUsers)
      this.searchEvent.emit(allUsers.filter(u => u.id == valeur));
    else
      this.searchEvent.emit([]);
  }

  protected readonly Number = Number;
}
