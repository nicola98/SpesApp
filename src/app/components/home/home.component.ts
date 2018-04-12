import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { List } from '../../entities/List';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private list : List[];
  constructor(private listService : ListService) { }

  ngOnInit() {
    this.list=this.listService.returnList("1");
  }

}
