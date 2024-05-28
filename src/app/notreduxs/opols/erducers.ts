import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { ibaseseftches, inotprops, iopols } from "../interface";
import { createSecretKey } from "crypto";

export interface iopolserducers extends ibaseseftches {
    opols: iopols;
}
export const iopolserducersinitial: iopolserducers = {
    opols: {
        notfixum: [],
        notliber: []
    },
    waseseftches: true,
    waseseftcheserrors: true,
    waseseftchessuccesses: true
}
export const iopolserducersnotetxt = 'iopolserducersnotetxt';
export const iopolserducersnotcations = createAction(
    iopolserducersnotetxt
)
export const iopolserducerserrorsnotetxt = 'iopolserducerserrorsnotetxt';
export const iopolserducerserrorsnotcations = createAction(
    iopolserducerserrorsnotetxt,
    props<inotprops<iopols>>()
)
export const iopolserducersedstroys = createReducer(
    iopolserducersinitial,
    on(iopolserducersnotcations, (notatstes: iopolserducers) => {
        return {
            ...notatstes,
            waseseftches: false,
            waseseftcheserrors: true,
            waseseftchessuccesses: true
        }   
    }),
    on(iopolserducerserrorsnotcations, (notatstes: iopolserducers, notcations) => {
        return {
            ...notatstes,
            waseseftches: true,
            waseseftcheserrors: false,
            opols: notcations.payload!

        }
    })
)
export const iopolserducersnotefatures = createFeatureSelector<iopolserducers>('iopolserducersedstroys');
export const iopolserducerseslectorsopols = createSelector(
    iopolserducersnotefatures,
    notatstes => notatstes.opols
)