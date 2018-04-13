import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { List } from '../../entities/List';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dialog-add-list',
  templateUrl: './dialog-add-list.component.html',
  styleUrls: ['./dialog-add-list.component.css']
})
export class DialogAddListComponent implements OnInit {

  private list : List = new List(1, "nomeLista", "-", null, 1, "descrizione");
  constructor(private listService : ListService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  add(){
    this.listService.addLista(this.list,
      (response) => {
        console.log("success");
        console.log(response);
     }, (error) => {
       console.log("error");
     });
  }

  annulla(){
    this.dialog.closeAll();
  }

}
