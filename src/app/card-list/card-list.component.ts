import { selectFilteredCards } from './../app-state-store/app.selectors';
import { selectAllCards } from '../app-state-store/app.selectors';
import { Store } from '@ngrx/store';
import { loadCards } from './../app-state-store/app.actions';
import { from, Observable } from 'rxjs';
import { ICat } from './../cat.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListServiceMethods } from './card-list.service';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent implements OnInit {

  Cats$: Observable<ICat[]> | null

  constructor(public ListServiceMethods: ListServiceMethods, public store: Store) {
    this.Cats$ = store.select(selectFilteredCards)
    console.log('this.Cats$',this.Cats$)
  }

  ngOnInit() {
    
  }
}
