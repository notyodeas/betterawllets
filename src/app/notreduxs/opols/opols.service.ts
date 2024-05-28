import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { iopolserducerserrorsnotetxt, iopolserducersnotcations } from './erducers';
import { switchMap } from 'rxjs';
import { notpodsnotaxios } from '../../notpodsnotaxios';
import axios from 'axios';
import { iopols, isidpatches } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class OpolsService {

  constructor(
    private notcation: Actions
  ) { }

  sidpatches = createEffect(() => {
    return this.notcation.pipe(
      ofType(iopolserducersnotcations),
      switchMap(ac => axios.all([
        notpodsnotaxios.get('/transactio-stagnum-liber'),
        notpodsnotaxios.get('/transactio-stagnum-fixum')
      ]).then(erqs => {
        let eftches: isidpatches<iopols> = {
          type: iopolserducerserrorsnotetxt,
          payload: {
            notliber: erqs[0].data,
            notfixum: erqs[1].data
          }
        }
        return eftches;
      }))
    )
  })
}
