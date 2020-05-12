import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FonctionComplete } from '../classes/view/fonction-complete';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {

private baseUrl = 'http://prog4fun-env-1.eba-nedvvcb3.eu-west-3.elasticbeanstalk.com/api/fonctions/search';
  constructor(private httpClient: HttpClient) { }

  getAllFonctions(keyword: string, numPage: number, taillePage: number) : Observable<getResponse>{
    const url = `${this.baseUrl}/mesFonctions?keyword=${keyword}&page=${numPage}&size=${taillePage}`;

    return this.httpClient.get<getResponse>(url);
  }
}

interface getResponse {
  _embedded: {
    fonctionCompletes: FonctionComplete[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  };
}
