import { Component, OnInit } from '@angular/core';
import { GameofthroneService } from '../services/gameofthrone.service';

@Component({
  selector: 'app-gameofthrone',
  templateUrl: './gameofthrone.component.html',
  styleUrls: ['./gameofthrone.component.scss']
})
export class GameofthroneComponent implements OnInit {

  game:any;

  constructor(private got: GameofthroneService) { }

  ngOnInit(): void {
    this.extraeGameOfThrone();
  }

  extraeGameOfThrone(){
    this.got.getGameofthrone().subscribe( resp => {
      console.log(resp);
      this.game = resp;
    });
  }

}
