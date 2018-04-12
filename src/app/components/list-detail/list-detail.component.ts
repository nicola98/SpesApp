import { Component, OnInit } from '@angular/core';
import { ListItemService } from '../../services/list-item.service';
import { Item } from '../../entities/Item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  private list : Item [];
  private idList;

  constructor(private listItemService : ListItemService, private router: ActivatedRoute,) {
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
