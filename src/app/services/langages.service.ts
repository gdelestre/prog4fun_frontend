import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Langage } from '../classes/langage';
import { Outil } from '../classes/outil';
import { Utilisation } from '../classes/utilisation';
import { DtoLangageUtilisation } from '../classes/dto/dto-langage-utilisation';

@Injectable({
  providedIn: 'root'
})
export class LangagesService {
  private baseUrl = 'http://prog4fun-env-1.eba-nedvvcb3.eu-west-3.elasticbeanstalk.com/api';

  constructor(private httpClient: HttpClient) { }

  getUtilisations(): Observable<Utilisation[]> {
    return this.httpClient.get<getResponseUtilisation>(`${this.baseUrl}/utilisations`).pipe(
      map(response => response._embedded.utilisations)
    );
  }

  getOutilsLangage(idLangage: number): Observable<Outil[]> {
    const url = `${this.baseUrl}/outils/search/findByOutilDeLangageId?id=${idLangage}`;

    return this.httpClient.get<getResponseOutilLangage>(url).pipe(
      map(response => response._embedded.outils)
    );
  }

  getOneLangage(idLangage: number): Observable<Langage> {
    const url = `${this.baseUrl}/langages/${idLangage}`;
    return this.httpClient.get<Langage>(url);
  }

  getLangageWithUtilisation(): Observable<DtoLangageUtilisation[]> {
    const url = `${this.baseUrl}/langages/search/langageAvecUtilisation`;

    return this.httpClient.get<getResponseLangageUtilisation>(url).pipe(
      map(response => response._embedded.dtoUtilisationDeLangages)
    );
  }
}

interface getResponseUtilisation {
  _embedded: {
    utilisations: Utilisation[];
  };
}

interface getResponseLangageUtilisation {
  _embedded: {
    dtoUtilisationDeLangages: DtoLangageUtilisation[];
  };
}

interface getResponseOutilLangage {
  _embedded: {
    outils: Outil[];
  };
}


