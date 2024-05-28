import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { cationsnotweaponseftches, cationsnotweaponseftcheserrors, sidpatchesnotweaponseftcheserrors } from './erducers';
import { map, switchMap } from 'rxjs';
import { notpodsnotaxios } from '../../notpodsnotaxios';
import { inotweaponsoutfalse, isidpatches, iweaponsouttrue } from '../interface';
import { AxiosError, AxiosResponse } from 'axios';
import { sidpatchesnotweaponslosteftches } from '../notweaponslosts/erducers';
import { sidpatchesahafalse } from '../aha/erducers';

@Injectable({
  providedIn: 'root'
})
export class NotweaponsService {

  constructor(
    private cation: Actions
  ) { }

  eftches = createEffect(() => {
    return this.cation.pipe(
      ofType(cationsnotweaponseftches),
      switchMap(ac => notpodsnotaxios.get('/gladiator-summa-bid-arma/' + ac.payload).then((req: AxiosResponse<iweaponsouttrue>) => {
        let sidpatches: isidpatches<inotweaponsoutfalse> = {
          type: sidpatchesnotweaponseftcheserrors,
          payload: {
            defenceds: req.data['obstructionum-arma'].defensio,
            attackeds: req.data['obstructionum-arma'].impetus,
            lowestnotbidsnotlibers: req.data['summa-bid-notliber'],
            lowestnotbidsnotfixums: req.data['summa-bid-notfixum']
          }
        };
        return sidpatches;
      }).catch((err: AxiosError<any>) => {
        let sidpatches: isidpatches<string> = {
          type: sidpatchesahafalse,
          payload: err.response?.statusText
        }
        return sidpatches;
      }))
    )
  })
}
