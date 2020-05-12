import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DtoActionFonction } from '../classes/dto/dto-action-fonction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  private baseUrl = 'http://prog4fun-env-1.eba-nedvvcb3.eu-west-3.elasticbeanstalk.com/api/actions/search';

  constructor(private httpClient: HttpClient) { }

  //Récupère les actions pour un outil avec la fonction qui lui est associée
  getActionWithFonction(idOutil: number, numPage: number, taillePage: number): Observable<getResponseActionFonction> {
    const url = `${this.baseUrl}/actionFonctionOutil?id=${idOutil}`
    + `&page=${numPage}&size=${taillePage}`;;

    return this.httpClient.get<getResponseActionFonction>(url);
  }
}

interface getResponseActionFonction {
  _embedded: {
    dtoActionFonctions: DtoActionFonction[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  };
}
