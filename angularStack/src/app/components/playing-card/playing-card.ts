import { Component, input, InputSignal } from '@angular/core';
import { ItemsCollections } from '../models/ItemsCollection';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.scss',
})
export class PlayingCard {

  item: InputSignal<ItemsCollections> = input.required<ItemsCollections>()
  
}
