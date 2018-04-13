import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { List } from '../../entities/List';
import { MatDialog } from '@angular/material';
import { DialogAddListComponent } from '../dialog-add-list/dialog-add-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private list : List[];
  private listVuota : boolean = true;
  constructor(private listService : ListService, private dialog: MatDialog) { }

  ngOnInit() {
    this.listService.returnList(sessionStorage.getItem("idUser"),
      (response) => {
        console.log("chiamata list fatta");
        this.list=response;
        console.log(this.list);
     }, (error) => {
       console.log("error");
     });
    if(this.list.length>0)
     this.listVuota=false;
  }

  addList(){
    console.log("yeeeeeeyeeeee");
    this.dialog.open(DialogAddListComponent)
  }

}
