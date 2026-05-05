import { Component, signal } from '@angular/core';
import { PlayingCard } from './components/playing-card/playing-card';
import { ItemsCollections } from './components/models/ItemsCollection';

@Component({
  selector: 'app-root',
  imports: [PlayingCard],
  templateUrl:'./app.html',
  styleUrl:'./app.css',
})
export class App {
  coin!: ItemsCollections;

  constructor() {
    this.coin = new ItemsCollections();
    this.coin.name = 'Pièce de 1972';
    this.coin.description = 'Pièce de 50 centimes de francs.';
    this.coin.rarity = 'Commune';
    this.coin.img = 'cards/2.png';
    this.coin.price = 170;
  }
}
