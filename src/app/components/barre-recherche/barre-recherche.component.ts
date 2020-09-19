import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  maRecherche(keyword: String){
    this.router.navigateByUrl(`/search/${ keyword }`)
  }

}