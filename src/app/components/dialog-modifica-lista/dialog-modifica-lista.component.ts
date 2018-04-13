import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ListService } from '../../services/list.service';
import { List } from '../../entities/List';

@Component({
  selector: 'app-dialog-modifica-lista',
  templateUrl: './dialog-modifica-lista.component.html',
  styleUrls: ['./dialog-modifica-lista.component.css']
})
export class DialogModificaListaComponent implements OnInit {

  private list : List = new List();
  private id;
  constructor(private dialog : MatDialog, private listService : ListService) { 
    this.id=sessionStorage.getItem("idDaModificare");
    this.list.id=this.id;
    console.log(this.id);
  }

  ngOnInit() {
  }

  annulla(){
    this.dialog.closeAll();
  }

  modifica(){
    this.listService.modificaLista(this.list,
      (response) => {
        console.log("success");
        console.log(response);
     }, (error) => {
       console.log("error");
     });
  }
}
