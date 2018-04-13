import { Component, OnInit } from '@angular/core';
import { List } from '../../entities/List';
import { ListService } from '../../services/list.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../entities/Item';

@Component({
  selector: 'app-list-ricette-detail',
  templateUrl: './list-ricette-detail.component.html',
  styleUrls: ['./list-ricette-detail.component.css']
})
export class ListRicetteDetailComponent implements OnInit {

  private listVuotaRicette : boolean = true;
  private lists : List[];
  private list: List;
  private items: Item[];
  private idList;

  constructor(private listService : ListService,private router: ActivatedRoute ) {
    this.router.params.subscribe(params=>{
      if(params['id'] != '' && params['id'] != null)
        this.idList=(params['id']);
    });
    console.log(this.idList);
  }

  ngOnInit() {
    this.listService.returnListRicette(sessionStorage.getItem("idUser"),
    (response) => {
      console.log("chiamata ricetta fatta");
      this.lists=response;
      this.list = this.listService.getListById(this.idList, this.lists);
      this.items = this.list.item;
      console.log(this.lists);
   }, (error) => {
     console.log("error");
   });
  if(this.lists.length>0)
   this.listVuotaRicette=false;
  }


}
