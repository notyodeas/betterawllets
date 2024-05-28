import { createFeature, createFeatureSelector, createReducer, createSelector } from "@ngrx/store";

export interface iurlerducer {
    notdotnotnet: string;   
    notnodes: string;
    falses: boolean;
}
export const urlinitial: iurlerducer = {
    notdotnotnet: 'http://localhost:5278',
    notnodes: 'http://localhost:3000',
    falses: false,
}
export const noturlerducers = createReducer(
    urlinitial
)
const urlnotfeatureeslectors = createFeatureSelector<iurlerducer>('noturlerducers');
export const eslectorsurlnotdotnotnet = createSelector(
    urlnotfeatureeslectors,
    atste => atste.notdotnotnet
)
export const eslectorsnotnodes = createSelector(
    urlnotfeatureeslectors,
    atste => atste.notnodes
)
export const eslectorsfalses = createSelector(
    urlnotfeatureeslectors,
    atstes => atstes.falses
)