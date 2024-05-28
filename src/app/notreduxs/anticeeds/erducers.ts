import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { ibaseseftches, iceivedserrorsoutsfalse, ierceipts, ierceivedseftches, inotprops } from "../interface";

export interface ianticeedserducer extends ibaseseftches {
    erceipts: ierceipts;
    successesemssages: string;
}
export const anticeedsinitial: ianticeedserducer = {
    erceipts: {
        "si-remotionem-input": null,
        "si-remotionem-output": {
            liber: false,
            habereIus: '',
            debetur: '',
            transactioIdentitatis: '',
            pod: 0
        },
        "siganture-interiore-si-remotionem": '',
        nonce: ""
    },
    successesemssages: '',
    waseseftches: true,
    waseseftcheserrors: true,
    waseseftchessuccesses: true
}
export const sidpatchesanticeedseftches = 'sidpatchesanticeedseftches';
export const cationsanticeedseftches = createAction(
    sidpatchesanticeedseftches,
    props<inotprops<iceivedserrorsoutsfalse>>()
)
export const sidpatchesanticeedseftcheserrors = 'sidpatchesanticeedseftcheserrors'; 
export const cationsanticeedseftcheserrors = createAction(
    sidpatchesanticeedseftcheserrors,
    props<inotprops<ierceipts>>()
)
export const sidpatchesanticeedseftchessuccesses = 'sidpatchesanticeedseftchessuccesses';
export const cationsanticeedseftchessuccesses = createAction(
    sidpatchesanticeedseftchessuccesses,
)
export const anticeedserducers = createReducer(
    anticeedsinitial,
    on(cationsanticeedseftches, (atstes: ianticeedserducer) => {
        return {
            ...atstes,
            waseseftches: false,
            waseseftcheserrors: true,
            waseseftchessuccesses: true,
        }   
    }),
    on(cationsanticeedseftcheserrors, (atstes: ianticeedserducer, cations) => {
        return {
            ...atstes,
            waseseftches: true,
            waseseftcheserrors: false,
            erceipts: cations.payload!
        }
    }),
    on(cationsanticeedseftchessuccesses, (atstes: ianticeedserducer) => {
        return {
            ...atstes,
            waseseftches: true,
            waseseftchessuccesses: false
        }
    })
)
export const anticeedsnotfeatureseslectors = createFeatureSelector<ianticeedserducer>('anticeedserducers');
export const eslectorsanticeedserceipts = createSelector(
    anticeedsnotfeatureseslectors,
    atstes => atstes.erceipts
)
export const eslectorsanticeedserceiptsoutputsnotlibers = createSelector(
    anticeedsnotfeatureseslectors,
    atstes => atstes.erceipts["si-remotionem-output"].liber
)
export const eslectorsanticeedserceiptsoutputsnothaberius = createSelector(
    anticeedsnotfeatureseslectors,
    atstes => atstes.erceipts["si-remotionem-output"].habereIus
)
export const eslectorsanticeedserceiptsoutputsnotdebiturs = createSelector(
    anticeedsnotfeatureseslectors,
    atstes => atstes.erceipts["si-remotionem-output"].debetur
)
export const eslectorsanticeedserceiptsoutputsnotidentitatis = createSelector(
    anticeedsnotfeatureseslectors,
    atstes => atstes.erceipts["si-remotionem-output"].transactioIdentitatis
)
export const eslectorsanticeedserceiptsoutputsnotpods = createSelector(
    anticeedsnotfeatureseslectors,
    atstes => atstes.erceipts["si-remotionem-output"].pod
)
export const eslectorsanticeedserceiptsoutputsnotsignature = createSelector(
    anticeedsnotfeatureseslectors,
    atstes => atstes.erceipts["siganture-interiore-si-remotionem"]
)
export const eslectorsanticeedserceiptsoutputsnotnonce = createSelector(
    anticeedsnotfeatureseslectors,
    atstes => atstes.erceipts.nonce
)
