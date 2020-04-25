import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Langage } from '../classes/langage';
import { Outil } from '../classes/outil';

@Injectable({
  providedIn: 'root'
})
export class LangagesService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  getLangages(): Observable<Langage[]>{
    return this.httpClient.get<getResponseLangage>(`${this.baseUrl}/langages`).pipe(
      map(response => response._embedded.langages)
    );
  }

  getOutilsLangage(idLangage: String): Observable<Outil[]>{
    const url =`${this.baseUrl}/outils/search/findByOutilDeLangageId?id=${idLangage}`;
    return this.httpClient.get<getResponseOutilLangage>(url).pipe(
      map(response => response._embedded.outils)
    );
  } 



  }

  interface getResponseLangage{
    _embedded: {
      langages: Langage[];
    };
  }

  interface getResponseOutilLangage{
    _embedded: {
      outils: Outil[];
    };
  }
  

