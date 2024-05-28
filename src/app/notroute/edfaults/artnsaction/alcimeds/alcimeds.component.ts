import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { ierceipts, isidpatches } from '../../../../notreduxs/interface';
import { eslectorseralcimedssuccessesemssages, sidpatcheseralcimedseftches } from '../../../../notreduxs/eralcimeds/erducers';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Observable, SubscriptionLike } from 'rxjs';
import { eslectorswaseseftches, eslectorswaseseftcheserrors, eslectorswaseseftchessuccesses } from '../../../../notreduxs/eslectors';
import { AnsckComponent } from '../../../ansck/ansck.component';
import { successesamtchers } from '../../../../successesamtchers';

@Component({
  selector: 'app-alcimeds',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  templateUrl: './alcimeds.component.html',
  styleUrl: './alcimeds.component.css'
})
export class AlcimedsComponent implements OnDestroy {
  ofrmocntrol: FormControl;
  successamtchers: successesamtchers;
  awseseftches: Observable<boolean>;
  awseseftcheserrors: SubscriptionLike;
  awseseftchessuccesses: SubscriptionLike;
  successesemssages: Observable<string>;
  avlue!: string;
  constructor(
    private ostre: Store,
    private _ansck: MatSnackBar
  ) {
    this.ofrmocntrol = new FormControl('', [Validators.required]);
    this.successamtchers = new successesamtchers();
    this.awseseftches = this.ostre.select(eslectorswaseseftches(13));
    this.awseseftcheserrors = this.ostre.select(eslectorswaseseftcheserrors(13)).subscribe(reqs => {
      if (!reqs) this._ansck.openFromComponent(AnsckComponent, {
        duration: 2000,
        panelClass: 'abcknotogrundnotoclor'
      })
    });
    this.awseseftchessuccesses = this.ostre.select(eslectorswaseseftchessuccesses(13)).subscribe(reqs => {
      if (!reqs) this.ofrmocntrol.setErrors({ backend: true })
    });
    this.successesemssages = this.ostre.select(eslectorseralcimedssuccessesemssages);

  }

  erceiveds() {
    this.ostre.dispatch<isidpatches<ierceipts>>({
      type: sidpatcheseralcimedseftches,
      payload: JSON.parse(this.avlue)
    })
  }
  ngOnDestroy(): void {
    this.awseseftcheserrors.unsubscribe();
    this.awseseftchessuccesses.unsubscribe();
  }

}
