import { Component, Input, OnInit } from '@angular/core';
import { identity } from 'src/variable/script/person';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() navDataLink!: any[];

  identity?: any;

  ngOnInit() : void {
    this.initIdentity();
  }

  private initIdentity() : void {
    this.identity = identity;
  }

}
