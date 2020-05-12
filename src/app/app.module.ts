import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OutilsComponent } from './components/outils/outils.component';
import { ListeCommandesComponent } from './components/liste-commandes/liste-commandes.component';
import { ListeActionsComponent } from './components/liste-actions/liste-actions.component';
import { BarreRechercheComponent } from './components/barre-recherche/barre-recherche.component';
import { ResultatRechercheComponent } from './components/resultat-recherche/resultat-recherche.component';


const routes: Routes =[
  {path: 'search/:keyword', component: ResultatRechercheComponent},
  {path: 'langage/:idLang/outils/:idOut/actions', component: ListeActionsComponent},
  {path: 'langage/:idLang/commandes', component: ListeCommandesComponent},
  {path: 'langage/:idLang', component: OutilsComponent},
  {path: 'acceuil', component: AcceuilComponent},
  {path: '', redirectTo: '/acceuil', pathMatch: 'full'},
  {path: '**', redirectTo: '/acceuil', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AcceuilComponent,
    OutilsComponent,
    ListeCommandesComponent,
    ListeActionsComponent,
    BarreRechercheComponent,
    ResultatRechercheComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    NgbModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
