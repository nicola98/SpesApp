import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-not-found',
  templateUrl: './component-not-found.component.html',
  styleUrls: ['./component-not-found.component.css']
})
export class ComponentNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome () {
    this.router.navigate(['/single-page-site'])
  }
}
