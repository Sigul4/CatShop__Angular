import { clearCards, loadCards, filterCards } from './app.actions';
import { ICat } from '../cat.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { createReducer, on } from '@ngrx/store';

export interface IStore {
    responsesData: ICat[]
    filteredData: ICat[]
}

export const store: IStore = {
    responsesData: [],
    filteredData: []
}

export const cardsReducer = createReducer(
    store,
    on(clearCards, state =>{ return {responsesData: [], filteredData : []}}), 

    on(loadCards, (state, response)=>{
        let newState = JSON.parse(JSON.stringify(state)) 
        newState = response
        console.log('response',response)
        return {responsesData: newState, filteredData: newState}
    }),

    on(filterCards, (state, data)=>{
        let newState: IStore = JSON.parse(JSON.stringify(state)) 
        const responsesData: ICat[] = Object.values(newState.responsesData)
        const found = responsesData.filter((cat: ICat)=>{return cat.name === data.Input})
        console.log("FOUND", found)
        return {responsesData: newState.responsesData, filteredData: found || newState.filteredData}
    })
)
