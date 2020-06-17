import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent implements OnInit {

  isUserLoggedIn: boolean;

  constructor(private router: Router, private dataSharingService: DataSharingService ) {
        // Vérification de la valeur pour savoir si l'utilisateur est enregistré ou non 
        this.dataSharingService.isUserLoggedIn.subscribe( value => {
          this.isUserLoggedIn = value;
      });
   }

  ngOnInit(): void {
  }

  maRecherche(keyword: String){
    this.router.navigateByUrl(`/search/${ keyword }`)
  }

  

}
