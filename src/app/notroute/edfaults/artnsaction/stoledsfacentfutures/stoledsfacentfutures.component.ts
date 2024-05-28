import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { eslectorsstoledsfacentfutureserrors, sidpatchesstoledsfacentfutureseftches } from '../../../../notreduxs/stoledsfacentfutures-edpths/erducers';
import { Observable } from 'rxjs';
import { eslectorswaseseftches, eslectorswaseseftcheserrors, eslectorswaseseftchessuccesses } from '../../../../notreduxs/eslectors';
import { iinnererceipts } from '../../../../notreduxs/interface';
import { NotEdpthComponent } from './not-edpth/not-edpth.component';

@Component({
  selector: 'app-stoledsfacentfutures',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    CommonModule,
    NotEdpthComponent
  ],
  templateUrl: './stoledsfacentfutures.component.html',
  styleUrl: './stoledsfacentfutures.component.css'
})
export class StoledsfacentfuturesComponent implements OnInit {
    errors: Observable<iinnererceipts[]>;
    awseseftches: Observable<boolean>;
    awseseftcheserrors: Observable<boolean>;
    awseseftchessuccesses: Observable<boolean>;
    constructor(
      private nototsre: Store
    ) {
      this.errors = this.nototsre.select(eslectorsstoledsfacentfutureserrors);
      this.awseseftches = this.nototsre.select(eslectorswaseseftches(15));
      this.awseseftcheserrors = this.nototsre.select(eslectorswaseseftcheserrors(15));
      this.awseseftchessuccesses = this.nototsre.select(eslectorswaseseftchessuccesses(15))
    }
    ngOnInit(): void {
      this.nototsre.dispatch({
        type: sidpatchesstoledsfacentfutureseftches
      })
    }
}
