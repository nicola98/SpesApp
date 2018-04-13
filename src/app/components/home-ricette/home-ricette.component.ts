import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { List } from '../../entities/List';
import { MatDialog } from '@angular/material';
import { DialogAddListComponent } from '../dialog-add-list/dialog-add-list.component';

@Component({
  selector: 'app-home-ricette',
  templateUrl: './home-ricette.component.html',
  styleUrls: ['./home-ricette.component.css']
})
export class HomeRicetteComponent implements OnInit {

  private listRicette : List[];
  private listVuotaRicette : boolean = true;
  constructor(private listService : ListService, private dialog: MatDialog) { }

  ngOnInit() {
    this.listService.returnListRicette(sessionStorage.getItem("idUser"),
      (response) => {
        console.log("chiamata ricetta fatta");
        this.listRicette=response;
        console.log(this.listRicette);
     }, (error) => {
       console.log("error");
     });
    if(this.listRicette.length>0)
     this.listVuotaRicette=false;
  }

  addList(){
    console.log("yeeeeeeyeeeee");
    this.dialog.open(DialogAddListComponent)
  }

}
