import { HttpClient } from '@angular/common/http';
import { ICat } from './../cat.service';
import { Store } from '@ngrx/store';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { selectAllCards } from '../app-state-store/app.selectors';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ListServiceMethods {

  public Cards$: Observable<ICat[]>

  constructor(private store: Store, private http: HttpClient) {
    // store.select(selectAllCards)
    //   .subscribe((data: ICat[]) =>{
    //     console.log('DATA ',data)
         
    // });
  }


}
