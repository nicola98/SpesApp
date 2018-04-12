import { Component, OnInit } from '@angular/core';
import { UserList } from '../../entities/user-list';
import { UserListService } from '../../services/user-list.service';
import { ListItem } from '../../entities/list-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private userLists: ListItem[];

  constructor(private userListService: UserListService) { 
    this.userLists = userListService.getUserList();
  }

  ngOnInit() {
  }

}
