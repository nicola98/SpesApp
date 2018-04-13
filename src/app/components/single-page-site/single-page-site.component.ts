import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'single-page-site',
  templateUrl: './single-page-site.component.html',
  styleUrls: ['./single-page-site.component.css']
})
export class SinglePageSiteComponent implements OnInit {
  email: string;
  contentReport: string;
  anchor: string;

  @ViewChild('contatti') el: ElementRef;
  @ViewChild('scarica') scarica: ElementRef;
  @ViewChild('funzionalita') funzionalita: ElementRef;

  constructor(private headerService: HeaderService) { 
    this.headerService.anchor$.subscribe(id => {
      this.anchor = id;
      if (this.anchor == "contatti")
        this.scrollToContatti();
      else if (this.anchor == "scarica")
        this.scrollToScarica();
      else if (this.anchor == "funzionalita")
        this.scrollToFunzionalita();
});
  }

  ngOnInit() {
  }

  scrollToScarica() {
    this.scarica.nativeElement.scrollIntoView();
  }
  scrollToContatti() {

    this.el.nativeElement.scrollIntoView();
  }
  scrollToFunzionalita() {
    this.funzionalita.nativeElement.scrollIntoView();
}

  setAnchor(anchor){
  this.headerService.setAnchor(anchor);
}

}
