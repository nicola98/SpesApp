import { Component, OnInit } from '@angular/core';
import { List } from '../../entities/List';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogElimitaListaComponent } from '../dialog-elimina-lista/dialog-elimita-lista.component';
import { DialogModificaListaComponent } from '../dialog-modifica-lista/dialog-modifica-lista.component';

@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.component.html',
  styleUrls: ['./ricette.component.css']
})
export class RicetteComponent implements OnInit {

  private list : List[];
  constructor(private listService : ListService, private router : Router,  private dialog: MatDialog ) { }

  ngOnInit() {
    this.listService.returnListRicette(sessionStorage.getItem("idUser"),
    (response) => {
      console.log("chiamata ricetta fatta");
      this.list=response;
      console.log(this.list);
   }, (error) => {
     console.log("error");
   });
  }

  detail(item: List)
  {
    console.log("ciaooooooooo");
      this.router.navigate(['/detail-ricettalist/'+item.id]);
  }

  modifica(item : List)
  {
    this.dialog.open(DialogModificaListaComponent);
  }

  delete(item : List){
    this.dialog.open(DialogElimitaListaComponent);
  }

}
