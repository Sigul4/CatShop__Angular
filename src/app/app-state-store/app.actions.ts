import { HttpClient } from '@angular/common/http';
import { CatService, ICat, IText } from './../cat.service';
import {createAction, props} from '@ngrx/store'
 

export const clearCards  = createAction('CLEAR_CARDS') 
export const loadCards   = createAction('LOAD_CARDS', props<ICat>()) 
export const filterCards = createAction('FILTER_CARDS', props<{Input: string}>()) 
