import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccueilComponent } from './components/accueil/accueil.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OutilsComponent } from './components/outils/outils.component';
import { ListeCommandesComponent } from './components/liste-commandes/liste-commandes.component';
import { ListeActionsComponent } from './components/liste-actions/liste-actions.component';
import { BarreRechercheComponent } from './components/barre-recherche/barre-recherche.component';
import { ResultatRechercheComponent } from './components/resultat-recherche/resultat-recherche.component';
import { LoginComponent } from './components/login/login.component';
import { BasicAuthInterceptorService } from './services/basic-auth-interceptor.service';
import { LogoutComponent } from './components/logout/logout.component';
import { FormsModule } from '@angular/forms';


const routes: Routes =[
  {path: 'login', component: LoginComponent},
  {path: 'search/:keyword', component: ResultatRechercheComponent},
  {path: 'langage/:idLang/outils/:idOut/actions', component: ListeActionsComponent},
  {path: 'langage/:idLang/commandes', component: ListeCommandesComponent},
  {path: 'langage/:idLang', component: OutilsComponent},
  {path: 'accueil', component: AccueilComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'},
  {path: 'logout', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    OutilsComponent,
    ListeCommandesComponent,
    ListeActionsComponent,
    BarreRechercheComponent,
    ResultatRechercheComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserModule,
    NgbModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
