import { Component, input } from '@angular/core';
import { ItemsCollections } from '../models/ItemsCollection';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.scss',
})
export class PlayingCard {

  item = input(new ItemsCollections)
  
}
