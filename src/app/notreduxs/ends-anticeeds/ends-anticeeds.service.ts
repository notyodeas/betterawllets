import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { cationssendanticeedeftches, cationssendanticeedeftcheserrors, sidpatchesendsanticeedseftches, sidpatchesendsanticeedseftchessuccesses, sidpatchesendsanticeedserrors } from './erducers';
import { map, switchMap } from 'rxjs';
import { notpodsnotaxios } from '../../notpodsnotaxios';
import { inotkeys, isidpatches } from '../interface';
import { AxiosError } from 'axios';
import { sidpatchesnotkeysunsets } from '../notkeys/erducers';
import { sidpatchesahafalse } from '../aha/erducers';

@Injectable({
  providedIn: 'root'
})
export class EndsAnticeedsService {

  constructor(
    private cation: Actions
  ) { }

  eftches = createEffect(() => {
    return this.cation.pipe(
      ofType(cationssendanticeedeftches),
      switchMap(ca => notpodsnotaxios.get('/propter-public/' + ca.payload!).then(req => {
        let sidpatches: isidpatches<inotkeys> = {
          type: sidpatchesendsanticeedserrors,
          payload: {
            privatusClavis: ca.payload!,
            publicaClavis: req.data
          }
        }
        return sidpatches;
      }).catch((err: AxiosError<string>) => {
        if (err.response?.status == 400) {
          return {
            type: sidpatchesendsanticeedseftchessuccesses
          }  
        } else {
          let sidpatches: isidpatches<string> = {
            type: sidpatchesahafalse,
            payload: err.response?.statusText
          }
          return sidpatches;
        }
      }))
    )
  })
  eftcheserrors = createEffect(() => {
    return this.cation.pipe(
      ofType(cationssendanticeedeftcheserrors),
      map(ca => {
        let sidpatches: isidpatches<inotkeys> = {
          type: sidpatchesnotkeysunsets,
          payload: ca.payload!
        };
        return sidpatches;
      })

    )
  })
}
