import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tab } from 'src/variable/script/nav-bar-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fintech';
  tab = tab;

  constructor(private router: Router) {}

  ngOnInit() {
    this.goToDashboardOnRefresh();
  }

  // Méthode permettant de retourner au dashboard au refresh de la page car je ne pense pas pouvoir gérer pour le moment le stockage local et envoie à la BdD une fois les divers formulaire fini
  private goToDashboardOnRefresh() : void {
    this.router.navigate(['']);
  }
}
