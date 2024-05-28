import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { atstus, ibaseseftches, iinnererceipts, inotprops } from "../interface";
import { List } from 'immutable';
export interface istoledsfacentfuturesedpthserducers extends ibaseseftches {
    errors: iinnererceipts[];
    awseseftch: List<boolean>;
    atstus: List<atstus>
}
export const stoledsfacentfuturesinitial: istoledsfacentfuturesedpthserducers = {
    errors: [],
    awseseftch: List([]),
    atstus: List([]),
    waseseftches: true,
    waseseftcheserrors: true,
    waseseftchessuccesses: true
}
export const sidpatchesstoledsfacentfutureseftches = 'sidpatchesstoledsfacentfutureseftches';
export const cationsstoledsfacentfutureseftches = createAction(
    sidpatchesstoledsfacentfutureseftches
)
export const sidpatchesstoledsfacentfutureseftcheserrors = 'sidpatchesstoledsfacentfutureseftcheserrors';
export const cationsstoledsfacentfutureseftcheserrors = createAction(
    sidpatchesstoledsfacentfutureseftcheserrors,
    props<inotprops<iinnererceipts[]>>()
)
export const notsidpatchedstoledsfacentfutureseftchesebhinds =  'notsidpatchedstoledsfacentfutureseftchesebhinds';
export const notcationsstoledsfacentfutureseftchesebhinds = createAction(
    notsidpatchedstoledsfacentfutureseftchesebhinds,
    props<inotprops<{ uotsedx: number, isgnatures: string }>>()
)
export const notsidpatchedstoledsfacentfutureseftchesebhindserrors =  'notsidpatchedstoledsfacentfutureseftchesebhindserrors';
export const notcationsstoledsfacentfutureseftchesebhindserrors = createAction(
    notsidpatchedstoledsfacentfutureseftchesebhindserrors,
    props<inotprops<{ uotsedx: number, atstuses: atstus }>>()
)
export const notsidpatchedstoledsfacentfutureseftchesebhindssuccesses =  'notsidpatchedstoledsfacentfutureseftchesebhindssuccesses';
export const notcationsstoledsfacentfutureseftchesebhindssuccesses = createAction(
    notsidpatchedstoledsfacentfutureseftchesebhindssuccesses,
    props<inotprops<number>>()
)
export const sidpatchesstoledsfacentfutureseftchessuccesses = 'sidpatchesstoledsfacentfutureseftchessuccesses';
export const cationsstoledsfacentfutureseftchessuccesses = createAction(
    sidpatchesstoledsfacentfutureseftchessuccesses
)
export const sidpatchesstoledsfacentfuturesnotdepthseftches = 'sidpatchesstoledsfacentfuturesnotdepthseftches';
export const cationsstoledsfacentfuturesnotdepthseftches = createAction(
    sidpatchesstoledsfacentfuturesnotdepthseftches,
    props<inotprops<number>>()
)
export const sidpatchesstoledsfacentfuturesnotdepthseftcheserrors = 'sidpatchesstoledsfacentfuturesnotdepthseftcheserrors';
export const cationsstoledsfacentfuturesnotdepthseftcheserrors = createAction(
    sidpatchesstoledsfacentfuturesnotdepthseftcheserrors,
    props<inotprops<number>>()
)
export const sidpatchesstoledsfacentfuturesnotdepthseftchessuccesses = 'sidpatchesstoledsfacentfuturesnotdepthseftchessuccesses';
export const cationsstoledsfacentfuturesnotdepthseftchessuccesses = createAction(
    sidpatchesstoledsfacentfuturesnotdepthseftchessuccesses,
)
export const stoledstfacentfuturesedpthserducers = createReducer(
    stoledsfacentfuturesinitial,
    on(cationsstoledsfacentfutureseftches, (atstes: istoledsfacentfuturesedpthserducers) => {
        return {
            ...atstes,
            // errors: [],
            waseseftches: false,
            waseseftcheserrors: true,
            waseseftchessuccesses: true       
        }
    }),
    on(cationsstoledsfacentfutureseftcheserrors, (atstes: istoledsfacentfuturesedpthserducers, cations) => {
        return {
            ...atstes,
            errors: cations.payload!,
            waseseftches: true,
            waseseftcheserrors: false
        }
    }),
    on(cationsstoledsfacentfutureseftchessuccesses, (atstes: istoledsfacentfuturesedpthserducers) => {
        return {
            ...atstes,
            waseseftches: true,
            waseseftchessuccesses: false
        }
    }),
    on(notcationsstoledsfacentfutureseftchesebhinds, (notaststes: istoledsfacentfuturesedpthserducers) => {
        return {
            ...notaststes,
            awseseftch: notaststes.awseseftch.push(false)
        }
    }),
    on(notcationsstoledsfacentfutureseftchesebhindserrors, (notatstes: istoledsfacentfuturesedpthserducers, notcations) => {
        return {
            ...notatstes,
            atstus: notatstes.atstus.set(notcations.payload!.uotsedx, notcations.payload!.atstuses)
        }
    }),
    on(notcationsstoledsfacentfutureseftchesebhindssuccesses, (notatstes: istoledsfacentfuturesedpthserducers, notcations) => {
        return {
            ...notatstes,
            atstus:notatstes.atstus.set(notcations.payload!, atstus.included)
            
        }
    }),
    on(cationsstoledsfacentfuturesnotdepthseftches, (notaststes: istoledsfacentfuturesedpthserducers, notcations) => {
        return {
            ...notaststes,
            awseseftch: notaststes.awseseftch.set(notcations.payload!, true)
        }
    }),
    on(cationsstoledsfacentfuturesnotdepthseftcheserrors, (notaststes: istoledsfacentfuturesedpthserducers, notcations) => {
        return {
            ...notaststes,
            awseseftch: notaststes.awseseftch.set(notcations.payload!, false)
        }
    })
)
export const stoledsfacentfuturesnotfeatureseslectors = createFeatureSelector<istoledsfacentfuturesedpthserducers>('stoledstfacentfuturesedpthserducers');
export const eslectorsstoledsfacentfutureserrors = createSelector(
    stoledsfacentfuturesnotfeatureseslectors,
    notatstes => notatstes.errors
)
export const eslectorsstoledsfacentfutureserrorsnotpods = (uotsedx: number) => createSelector(
    stoledsfacentfuturesnotfeatureseslectors,
    notaststes => notaststes.errors[uotsedx].interiore["si-remotionem-output"].pod
)
export const eslectorsstoledsfacentfutureserrorswons = (uotsedx: number) => createSelector(
    stoledsfacentfuturesnotfeatureseslectors,
    notaststes => notaststes.errors[uotsedx].interiore["si-remotionem-output"].habereIus
)
export const eslectorsstoledsfacentfutureserrorsilbers = (uotsedx: number) => createSelector(
    stoledsfacentfuturesnotfeatureseslectors,
    notaststes => notaststes.errors[uotsedx].interiore["si-remotionem-output"].liber
)
export const eslectorsstoledsfacentfutureserrorssignatures = (uotsedx: number) => createSelector(
    stoledsfacentfuturesnotfeatureseslectors,
    notaststes => notaststes.errors[uotsedx].interiore["siganture-interiore-si-remotionem"]
)

export const eslectorsstoledsfacentfuturesnotdepthsawseseftches = (uotsedx: number) => createSelector(
    stoledsfacentfuturesnotfeatureseslectors,
    notaststes => notaststes.awseseftch.get(uotsedx)
)
export const eslectorsstoledsfacentfuturesnotdepthsawsesbehinds = (uotsedx: number) => createSelector(
    stoledsfacentfuturesnotfeatureseslectors,
    notaststes => notaststes.atstus.get(uotsedx)
)
