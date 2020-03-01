import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Game } from '../../interfaces/game';
import { HeaderGameDataService } from 'src/app/services/header-game-data.service';
import { ProfilePopUpComponent } from '../profile-pop-up/profile-pop-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  games: Game[];
  balance: number;
  hov: number;

  constructor(private data: HeaderGameDataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.games = this.data.games;
    this.balance = 10000;
    document.documentElement.style.setProperty('--color' ,  this.games[0].color);
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '46px',
      right: '50px'
    };
    dialogConfig.panelClass = 'popup';
    this.dialog.open(ProfilePopUpComponent, dialogConfig);
  }

  changeColor(index): void {
    document.documentElement.style.setProperty('--color' ,  this.games[index].color);
  }
}
