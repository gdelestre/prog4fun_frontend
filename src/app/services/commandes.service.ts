import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DtoCommandeFonction } from '../classes/dto/dto-commande-fonction';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {
  private baseUrl = 'http://prog4fun-env-1.eba-nedvvcb3.eu-west-3.elasticbeanstalk.com/api/commandes/search';

  constructor(private httpClient: HttpClient) { }

  //Récupère les commande pour un langage avec la fonction qui lui est associée
  getCommandeWithFonction(idLangage: number, numPage: number, taillePage: number): Observable<getResponseCommandeFonction> {
    const url = `${this.baseUrl}/commandeFonctionLangage?id=${idLangage}`
      + `&page=${numPage}&size=${taillePage}`;

    return this.httpClient.get<getResponseCommandeFonction>(url);
  }

}


interface getResponseCommandeFonction {
  _embedded: {
    dtoCommandeFonctions: DtoCommandeFonction[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  };
}

