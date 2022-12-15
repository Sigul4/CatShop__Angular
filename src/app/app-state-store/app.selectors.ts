import { IStore } from './app.reducers';
import { ICat } from '../cat.service';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAllCards = createSelector(
    createFeatureSelector('allCards'),
    (state: IStore)=>{
        return Object.values(state.responsesData).slice(0,-1)
    }
)

export const selectFilteredCards = createSelector(
    createFeatureSelector('allCards'),
    (state: IStore)=>{
        return Object.values(state.filteredData).slice(0,-1)
    }
)
