import { Injectable } from '@angular/core';
import { AddPlayerComponent } from './add-player/add-player.component';
import { Observable, of } from 'rxjs';
import { Player } from './domain/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
  players: Player[] = [];

  constructor() { }
      
  getPlayer(): Player[] {    
    return this.players;
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  removePlayer(element: Player) {
    this.players.forEach( (value, index) => {
      if (value == element) this.players.splice(index, 1);
    });
  }

}