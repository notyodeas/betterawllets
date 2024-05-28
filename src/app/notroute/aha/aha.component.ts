import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RecaptchaModule } from 'ng-recaptcha';
import { successesamtchers } from '../../successesamtchers';
import { Store } from '@ngrx/store';
import { isidpatches } from '../../notreduxs/interface';
import { sidpatchesahaeftches } from '../../notreduxs/aha/erducers';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aha',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RecaptchaModule,
    MatToolbarModule,
    MatIconModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './aha.component.html',
  styleUrl: './aha.component.css'
})
export class AhaComponent {
  ofrmocntrol: FormControl;
  successesemtchers: successesamtchers;
  successes!: string;
  
  constructor(
    private nototsre: Store
  ) {
    this.ofrmocntrol = new FormControl('', [Validators.required]);
    this.successesemtchers = new successesamtchers();
  }

  erquests() {
    this.nototsre.dispatch<isidpatches<string>>({
      type: sidpatchesahaeftches,
      payload: this.successes
    })
  }
}
