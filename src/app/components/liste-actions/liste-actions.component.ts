import { Component, OnInit } from '@angular/core';
import { DtoActionFonction } from 'src/app/classes/dto/dto-action-fonction';
import { ActivatedRoute } from '@angular/router';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-liste-actions',
  templateUrl: './liste-actions.component.html',
  styleUrls: ['./liste-actions.component.css']
})
export class ListeActionsComponent implements OnInit {

  myActionsWithFonction: DtoActionFonction[] = [];
  idOutilSelect: number = null;
  idLangage: number = null;

  // Propriété pour la pagination
  leNumPage: number = 1;
  laTaillePage: number = 4;
  totalElement: number = 10;

  constructor(private actionService: ActionsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listActionWithFonction();
  }

  listActionWithFonction() {
    this.idOutilSelect = +this.route.snapshot.paramMap.get("idOut");
    this.idLangage = +this.route.snapshot.paramMap.get("idLang");
    // Pour SpringBoot la numérotation des pages commence à 0 et pour Angular à 1
    this.actionService.getActionWithFonction(this.idOutilSelect, this.leNumPage - 1, this.laTaillePage)
      .subscribe(this.processResult());
  }

  processResult() {
    return data => {
      this.myActionsWithFonction = data._embedded.dtoActionFonctions;
      // Pour SpringBoot la numérotation commence à 0 et pour Angular à 1
      this.leNumPage = data.page.number + 1;
      this.laTaillePage = data.page.size;
      this.totalElement = data.page.totalElements;
    };
  }

}
