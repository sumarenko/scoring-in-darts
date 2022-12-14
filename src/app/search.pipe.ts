import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './domain/player';

@Pipe({
    name:'search',
    pure: false
})
export class SearchPipe implements PipeTransform {
    transform(players: Player[], strInput: string): Player[] {     
        if (!strInput) {
            return players;
        }

        strInput = strInput.toLowerCase();
        return players.filter( (value: Player) => value.name.toLowerCase().includes(strInput));
    } 
}