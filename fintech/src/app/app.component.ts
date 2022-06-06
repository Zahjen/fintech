import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tab } from 'src/variable/script/nav-bar-data';
import { person } from 'src/variable/script/person';
import { ShareDataClientService } from './services/shared/share-client-data/share-data-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fintech';
  tab = tab;

  constructor(
    private router: Router,
    private shareDataClientService : ShareDataClientService
  ) {}

  ngOnInit() {
    this.goToDashboardOnRefresh();
    this.initClient();
  }

  private initClient() : void {
    this.shareDataClientService.setClient(person);
  }

  // Méthode permettant de retourner au dashboard au refresh de la page car je ne pense pas pouvoir gérer pour le moment le stockage local et envoie à la BdD une fois les divers formulaire fini
  private goToDashboardOnRefresh() : void {
    this.router.navigate(['']);
  }
}
