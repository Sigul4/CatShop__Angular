import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFilteredCards } from './../app-state-store/app.selectors';
import { ICat } from './../cat.service';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
})

export class CardListComponent implements OnInit {
  Cats$: Observable<ICat[]> | null;

  constructor(
    public store: Store
  ) {
    this.Cats$ = store.select(selectFilteredCards);
    console.log('this.Cats$', this.Cats$);
  }

  ngOnInit() {}
}
