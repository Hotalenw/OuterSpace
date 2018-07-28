import { Component } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  title: string;
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Outer Space';


  rockyTiles: Tile[] = [
    {text: 'Let\'s Explore Mercury!', cols: 1, rows: 1, title: 'mercury'},
    {text: 'Let\'s Explore Venus!', cols: 1, rows: 1, title: 'venus'},
    {text: 'Let\'s Explore Earth!', cols: 1, rows: 1, title: 'earth'},
    {text: 'Let\'s Explore Mars!', cols: 1, rows: 1, title: 'mars'},
  ];

  gasTiles: Tile[] = [
    {text: 'Let\'s Explore Jupiter!', cols: 1, rows: 1, title: 'jupiter'},
    {text: 'Let\'s Explore Saturn!', cols: 1, rows: 1, title: 'saturn'},
    {text: 'Let\'s Explore Uranus!', cols: 1, rows: 1, title: 'uranus'},
    {text: 'Let\'s Explore Neptune!', cols: 1, rows: 1, title: 'neptune'},
  ];
}
