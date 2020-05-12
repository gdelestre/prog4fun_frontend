import { Component, OnInit, Input } from '@angular/core';
import { CommandesService } from 'src/app/services/commandes.service';
import { ActivatedRoute } from '@angular/router';
import { LangagesService } from 'src/app/services/langages.service';
import { DtoCommandeFonction } from 'src/app/classes/dto/dto-commande-fonction';


@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css']
})
export class ListeCommandesComponent implements OnInit {

  myCommandesWithFonction: DtoCommandeFonction[] = [];
  idLangageSelect: number = null;

  // Propriété pour la pagination
  leNumPage: number = 1;
  laTaillePage: number = 4;
  totalElement: number = 10;

  constructor(private commandeService: CommandesService,
    private langageService: LangagesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listCommandeWithFonction();
  }

  listCommandeWithFonction() {
    this.idLangageSelect = +this.route.snapshot.paramMap.get("idLang");
    // Pour SpringBoot la numérotation des pages commence à 0 et pour Angular à 1
    this.commandeService.getCommandeWithFonction(this.idLangageSelect, this.leNumPage - 1, this.laTaillePage)
      .subscribe(this.processResult());
  }

  processResult() {
    return data => {
      this.myCommandesWithFonction = data._embedded.dtoCommandeFonctions;
      // Pour SpringBoot la numérotation commence à 0 et pour Angular à 1
      this.leNumPage = data.page.number + 1;
      this.laTaillePage = data.page.size;
      this.totalElement = data.page.totalElements;
    };
  }

}
