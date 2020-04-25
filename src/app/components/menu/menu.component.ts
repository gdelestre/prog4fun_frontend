import { Component, OnInit } from '@angular/core';
import { Langage } from 'src/app/classes/langage';
import { LangagesService } from 'src/app/services/langages.service';
import { Outil } from 'src/app/classes/outil';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mesLangages: Langage[] = [];
  mesUtilisations: String[] = ["Programmation", "Base de données", "OS"];
  mesOutils: Outil[] = [];
  idLangage: String = "";
  constructor(private langageService: LangagesService) { }

  ngOnInit(): void {
    this.listLangages();
  }

  listLangages(){
    this.langageService.getLangages().subscribe(
      data => this.mesLangages = data
    );
  }

  listOutils(idLangage: String){
    this.langageService.getOutilsLangage(idLangage).subscribe(
      data => this.mesOutils = data
    );
  }

}
