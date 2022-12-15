import { FormControl } from '@angular/forms';
import {
  loadCards,
  clearCards,
  filterCards,
} from './app-state-store/app.actions';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatService, Entries, ICat, Image, IText, Weight } from './cat.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public Cats: ICat;
  public BottomVisibility: boolean;
  public CardPosition = true;
  public selected: string;
  model: FormControl = new FormControl();
  values = [];

  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  constructor(private CatService: CatService, private store: Store) {}

  onChangeShowiness(): void {
    this.BottomVisibility = !this.BottomVisibility;
    console.log('BottomVisibility', this.BottomVisibility);
  }

  onChangeHideless(): void {
    this.CardPosition = !this.CardPosition;
  }

  onLoadCard(): void {
    this.CatService.getCats().subscribe((res) => {
      this.Cats = res;
      console.log('===========>this.Cats', this.Cats);
      this.store.dispatch(loadCards(res));
    });
  }

  onFindBy(): void {
    // let filterCards: ICat
    this.CatService.getCatsByBreed(this.selected).subscribe((res) => {
      this.store.dispatch(loadCards(res));
    });
  }

  onClearCard(): void {
    this.store.dispatch(clearCards());
  }

  onTextInput(): void {
    this.model.valueChanges.pipe(debounceTime(1000)).subscribe((text) => {
      text
        ? this.store.dispatch(filterCards({ Input: text }))
        : this.onLoadCard();
    });
  }

  ngOnInit() {
    console.log('==>', this.input);
    this.onTextInput();
  }
}
