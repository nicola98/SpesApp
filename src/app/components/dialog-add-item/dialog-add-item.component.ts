import { Component, OnInit } from '@angular/core';
import { ListItemService } from '../../services/list-item.service';
import { Item } from '../../entities/Item';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dialog-add-item',
  templateUrl: './dialog-add-item.component.html',
  styleUrls: ['./dialog-add-item.component.css']
})
export class DialogAddItemComponent implements OnInit {

  
  private list : Item [];
  private idList;

  constructor(private listItemService : ListItemService, private router: ActivatedRoute, private dialog: MatDialog) {
    this.router.params.subscribe(params=>{
      if(params['id'] != '' && params['id'] != null)
        this.idList=(params['id']);
    });
    console.log(this.idList);
   }
 
  ngOnInit() {
    this.listItemService.returnListItem(this.idList,
      (response) => {
        console.log("chiamata list fatta");
        this.list=response;
        console.log(this.list);
     }, (error) => {
       console.log("error");
     });
  }

}
