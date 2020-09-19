import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RechercheService } from 'src/app/services/recherche.service';
import { FonctionComplete } from 'src/app/classes/view/fonction-complete';

@Component({
  selector: 'app-resultat-recherche',
  templateUrl: './resultat-recherche.component.html',
  styleUrls: ['./resultat-recherche.component.css']
})
export class ResultatRechercheComponent implements OnInit {

  mesFonctions: FonctionComplete[] = [];
  keyword: string = null;
  previousKeyword: string = null;

  // Propriété pour la pagination
  leNumPage: number = 1;
  laTaillePage: number = 4;
  totalElement: number = 10;

  constructor(private route: ActivatedRoute, private rechercheService: RechercheService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listFonctionSearch();
    });
  }

  listFonctionSearch() {
    //Récupère let mot tapé dans la barre de recherche
    this.keyword = this.route.snapshot.paramMap.get("keyword");

    //Si le mot recherché change, retour à la page 1
    if (this.previousKeyword != this.keyword) {
      this.leNumPage = 1;
    }
    this.previousKeyword = this.keyword;

    //Récupère les commandes à partir du mot tapé dans la barre de recherche
    this.rechercheService.getAllFonctions(this.keyword, this.leNumPage - 1, this.laTaillePage)
      .subscribe(this.processResult());
  }

  processResult() {
    return data => {
      this.mesFonctions = data._embedded.fonctionCompletes;
      // Pour SpringBoot la numérotation commence à 0 et pour Angular à 1
      this.leNumPage = data.page.number + 1;
      this.laTaillePage = data.page.size;
      this.totalElement = data.page.totalElements;
    };
  }

}
