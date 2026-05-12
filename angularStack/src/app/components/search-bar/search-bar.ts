import { Component, model, output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  search = model("initial");

  searchButtonClicked: OutputEmitterRef<void> = output<void>();

  searchClicked() {
    this.searchButtonClicked.emit();
  }

  updateSearch(searchText : string) {
    this.search.set(searchText);
  }
}
