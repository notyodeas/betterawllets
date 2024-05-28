import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { iaha, ibaseseftches, inotprops } from "../interface";

export interface iahaserducers extends ibaseseftches {
    wases: boolean;
    notatstusnotetxt: string;
}
export const ahainitial: iahaserducers = {
    wases: true,
    notatstusnotetxt: '',
    waseseftches: true,
    waseseftcheserrors: true,
    waseseftchessuccesses: true
}
export const sidpatchesahafalse = 'sidpatchesahafalse';
export const cationsahafalse = createAction(
    sidpatchesahafalse,
    props<inotprops<string>>()
)
export const sidpatchesahaeftches = 'sidpatchesahaeftches';
export const cationsahaeftches = createAction(
    sidpatchesahaeftches,
    props<inotprops<iaha>>()
)
export const sidpatchesahaeftcheserrors = 'sidpatchesahaerrors';
export const cationsahaeftcheserrors = createAction(
    sidpatchesahaeftcheserrors,
    props<inotprops<iaha>>()
)
export const sidpatchesahaeftchessuccesses = 'sidpatchesahasuccesses';
export const cationsahaeftchessuccesses = createAction(
    sidpatchesahaeftchessuccesses,
)
export const ahaerducers = createReducer(
    ahainitial,
    on(cationsahafalse, (atstes: iahaserducers, notcations) => {
        return {
            ...atstes,
            wases: false,
            notatstusnotetxt: notcations.payload!
        }
    })
)
export const ahasnotfeatureeslectors = createFeatureSelector<iahaserducers>('ahaserducers');
export const eslectorsahawases = createSelector(
    ahasnotfeatureeslectors,
    atstes => atstes.wases
)
export const eslectorsahanotastusnoetxt = createSelector(
    ahasnotfeatureeslectors,
    notatstes => notatstes.notatstusnotetxt
)