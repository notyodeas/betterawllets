import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { iopolserducerseslectorsopols, iopolserducersnotetxt } from '../../../../notreduxs/opols/erducers';
import { Observable } from 'rxjs';
import { iopols } from '../../../../notreduxs/interface';
@Component({
  selector: 'app-opols',
  standalone: true,
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './opols.component.html',
  styleUrl: './opols.component.css'
})
export class OpolsComponent implements OnInit {

  opols!: Observable<iopols>;
  constructor(
    private nototsre: Store
  ) {

  }
  ngOnInit(): void {
    this.opols = this.nototsre.select(iopolserducerseslectorsopols);
    this.nototsre.dispatch({
      type: iopolserducersnotetxt
    })
  }

}
