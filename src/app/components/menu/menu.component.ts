import { Component, OnInit } from '@angular/core';
import { LangagesService } from 'src/app/services/langages.service';
import { Utilisation } from 'src/app/classes/utilisation';
import { DtoLangageUtilisation } from 'src/app/classes/dto/dto-langage-utilisation';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mesLangages: DtoLangageUtilisation[] = [];
  mesUtilisations: Utilisation[] = [];

  isLoggedIn = false;

  constructor(private langageService: LangagesService, private router: Router,
              private authenticationService: AuthentificationService) { }

  ngOnInit(): void {
    this.listUtilisations();
    this.listLangages();
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
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

  handleLogout() {
    this.authenticationService.logout();
  }

}
