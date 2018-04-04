import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'single-page-site',
  templateUrl: './single-page-site.component.html',
  styleUrls: ['./single-page-site.component.css']
})
export class SinglePageSiteComponent implements OnInit {
  email: string;
  contentReport: string;

  constructor() { }

  ngOnInit() {
  }

}
