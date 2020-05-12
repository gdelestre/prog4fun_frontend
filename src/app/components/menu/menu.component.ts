import { Component, OnInit } from '@angular/core';
import { LangagesService } from 'src/app/services/langages.service';
import { Utilisation } from 'src/app/classes/utilisation';
import { DtoLangageUtilisation } from 'src/app/classes/dto/dto-langage-utilisation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mesLangages: DtoLangageUtilisation[] = [];
  mesUtilisations: Utilisation[] = [];
  constructor(private langageService: LangagesService) { }

  ngOnInit(): void {
    this.listUtilisations();
    this.listLangages();
  }

  listUtilisations() {
    this.langageService.getUtilisations().subscribe(
      data => this.mesUtilisations = data
    );
  }

  listLangages() {
    this.langageService.getLangageWithUtilisation().subscribe(
      data => this.mesLangages = data
    );
  }

}
