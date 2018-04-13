import { Component, OnInit } from '@angular/core';
import { List } from '../../entities/List';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogElimitaListaComponent } from '../dialog-elimina-lista/dialog-elimita-lista.component';
import { DialogModificaListaComponent } from '../dialog-modifica-lista/dialog-modifica-lista.component';

@Component({
  selector: 'app-elenco-liste',
  templateUrl: './elenco-liste.component.html',
  styleUrls: ['./elenco-liste.component.css']
})
export class ElencoListeComponent implements OnInit {

  private list : List[];
  private id;
  constructor(private listService : ListService, private router : Router,  private dialog: MatDialog ) { }

  ngOnInit() {
    this.listService.returnList(sessionStorage.getItem("idUser"),
    (response) => {
      console.log("chiamata list fatta");
      this.list=response;
      console.log(this.list);
   }, (error) => {
     console.log("error");
   });
  }

  detail(item: List)
  {
    console.log("ciaooooooooo");
      this.router.navigate(['/detail-detail/'+item.id]);
  }

  modifica(item : List)
  {
    this.id = item.id
    sessionStorage.setItem("idDaModificare", this.id);
    this.dialog.open(DialogModificaListaComponent);
  }

  delete(item : List){
    sessionStorage.setItem("nomeDaEliminare", item.name);
    this.id = item.id
    sessionStorage.setItem("idDaEliminare", this.id);
    this.dialog.open(DialogElimitaListaComponent);
  }

}
