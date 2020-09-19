import { Component, OnInit } from '@angular/core';
import { Outil } from 'src/app/classes/outil';
import { ActivatedRoute } from '@angular/router';
import { LangagesService } from 'src/app/services/langages.service';
import { Langage } from 'src/app/classes/langage';

@Component({
  selector: 'app-outils',
  templateUrl: './outils.component.html',
  styleUrls: ['./outils.component.css']
})
export class OutilsComponent implements OnInit {

  mesOutilsDeLangage: Outil[] = [];
  idLangageSelect: number = null;
  langageSelect: Langage = new Langage;

  constructor(private route: ActivatedRoute, private langageService: LangagesService) { }

  ngOnInit(): void {

    // il faut souscrire avant pour que l'id du langage soit actualisé à chaque clic
    this.route.paramMap.subscribe( () => {
      this.listeOutilsParLangage();
    });
  }

  listeOutilsParLangage() {
    this.idLangageSelect = +this.route.snapshot.paramMap.get("idLang");
    this.langageService.getOutilsLangage(this.idLangageSelect).subscribe(
      data => this.mesOutilsDeLangage = data
    );

    this.langageService.getOneLangage(this.idLangageSelect).subscribe(
      data => this.langageSelect = data
    );
  }

}
