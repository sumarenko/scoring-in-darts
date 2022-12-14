import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { GameGuard }   from './game.guard';
import { AppComponent } from './app.component';
import { SelectGameComponent } from './select-game/select-game.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { GameComponent } from './game/game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerService } from './player.service';
import { GameService } from './game.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { ReversePipe } from './reverse.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameResultComponent } from './game-result/game-result.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes = [
  { path: '', component: SelectGameComponent},
  { path: 'add-player', component: AddPlayerComponent},
  { path: 'game/:type', component: GameComponent, canActivate: [GameGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    SelectGameComponent,
    AddPlayerComponent,
    GameComponent,
    SearchPipe,
    ReversePipe,
    GameResultComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    PlayerService,
    GameService,
    GameGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
