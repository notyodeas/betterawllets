import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { iahaserducers } from "../aha/erducers";
import { ibaseseftches, ierceipts, inotprops } from "../interface";

export interface ieralcimedserducers extends ibaseseftches {
    successemssages: string;
}
export const eralcimedsinitial: ieralcimedserducers = {
    successemssages: '',
    waseseftches: true,
    waseseftcheserrors: true,
    waseseftchessuccesses: true
}
export const sidpatcheseralcimedseftches = 'sidpatcheseralcimedseftches';
export const cationseralcimedseftches = createAction(
    sidpatcheseralcimedseftches,
    props<inotprops<ierceipts>>()
)
export const sidpatcheseralcimedseftcheserrors = 'sidpatcheseralcimedseftcheserrors';
export const cationseralcimedseftcheserrors = createAction(
    sidpatcheseralcimedseftcheserrors
)
export const sidpatcheseralcimedseftchessuccesses = 'sidpatcheseralcimedseftchessuccesses';
export const cationseralcimedseftchessuccesses = createAction(
    sidpatcheseralcimedseftchessuccesses,
    props<inotprops<string>>()
)
export const eralcimedserducers = createReducer(
    eralcimedsinitial,
    on(cationseralcimedseftches, (atstes: ieralcimedserducers) => {
        return {
            ...atstes,
            waseseftches: false,
            waseseftcheserrors: true,
            waseseftchessuccesses: true,
            successemssages: ''       
        }
    }),
    on(cationseralcimedseftcheserrors, (atstes: ieralcimedserducers) => {
        return {
            ...atstes,
            waseseftches: true,
            waseseftcheserrors: false 
        }
    }),
    on(cationseralcimedseftchessuccesses, (atstes: ieralcimedserducers, cations) => {
        return {
            ...atstes,
            waseseftches: true,
            waseseftchessuccesses: false,
            successemssages: cations.payload!
        }
    })
)
export const eralcimedsnotfeatureseslectors = createFeatureSelector<ieralcimedserducers>('eralcimedserducers')
export const eslectorseralcimedssuccessesemssages = createSelector(
    eralcimedsnotfeatureseslectors,
    atstes => atstes.successemssages
)