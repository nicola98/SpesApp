import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-dialog-elimita-lista',
  templateUrl: './dialog-elimita-lista.component.html',
  styleUrls: ['./dialog-elimita-lista.component.css']
})
export class DialogElimitaListaComponent implements OnInit {

  private nameList;
  constructor(private dialog : MatDialog, private listService : ListService) { 
    this.nameList=sessionStorage.getItem("nomeDaEliminare");
  }

  ngOnInit() {
  }

  annulla(){
    this.dialog.closeAll();
  }

  elimina(){
    console.log("tiogoeigioaejgioerjg");
    this.listService.eliminaLista(sessionStorage.getItem("idDaEliminare"),
      (response) => {
        console.log("success");
        console.log(response);
     }, (error) => {
       console.log("error");
     });
  }

}
