import { Component, OnInit } from '@angular/core';
import { List } from '../../entities/List';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-elenco-liste',
  templateUrl: './elenco-liste.component.html',
  styleUrls: ['./elenco-liste.component.css']
})
export class ElencoListeComponent implements OnInit {

  private list : List[];
  constructor(private listService : ListService) { }

  ngOnInit() {
    this.listService.returnList("1",
    (response) => {
      console.log("chiamata list fatta");
      this.list=response;
      console.log(this.list);
   }, (error) => {
     console.log("error");
   });
  }

}
