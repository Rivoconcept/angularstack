import { Component, computed, signal } from '@angular/core';
import { PlayingCard } from './components/playing-card/playing-card';
import { ItemsCollections } from './components/models/ItemsCollection';
import { SearchBar } from './components/search-bar/search-bar';

@Component({
  selector: 'app-root',
  imports: [PlayingCard, SearchBar],
  templateUrl:'./app.html',
  styleUrl:'./app.css',
})
export class App {
  count = 0;
  searchText ='';
  coin!: ItemsCollections;
  linx!: ItemsCollections;
  god!: ItemsCollections;

  itemList: ItemsCollections[] = [];
  selectedItemIndex = signal(0);

  selectedItem = computed(() => {
    return this.itemList[this.selectedItemIndex()];
  })

  constructor() {
    this.coin = new ItemsCollections();
    this.coin.name = 'Pièce de 1972';
    this.coin.description = 'Pièce de 50 centimes de francs.';
    this.coin.rarity = 'Commune';
    this.coin.img = 'cards/2.png';
    this.coin.price = 170;

    this.linx = new ItemsCollections();

    this.god = new ItemsCollections();
    this.god.name = "Poseidon";
    this.god.description = 'Dieu de la mer.';
    this.god.rarity = 'Univers';
    this.god.img = 'cards/3.png';
    this.god.price = 20;

    this.itemList = [
      this.coin,
      this.linx,
      this.god
    ]
  }

  incrementCount() {
    this.count++;
  }

  // #Methode SET
  // incrementIndex() {
  //   const currentValue = this.selectedItemIndex();
  //   this.selectedItemIndex.set((currentValue + 1) % 3);
  // }

  // #Methode UPDATE
  incrementIndex() {
    this.selectedItemIndex.update((currentValue) => {
      return (currentValue + 1) % 3;
    })
  }
}
