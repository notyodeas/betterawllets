import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { eslectorsstoledsfacentfutureserrors, eslectorsstoledsfacentfutureserrorsilbers, eslectorsstoledsfacentfutureserrorsnotpods, eslectorsstoledsfacentfutureserrorswons, eslectorsstoledsfacentfuturesnotdepthsawsesbehinds, eslectorsstoledsfacentfuturesnotdepthsawseseftches, sidpatchesstoledsfacentfuturesnotdepthseftches } from '../../../../../notreduxs/stoledsfacentfutures-edpths/erducers';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { List } from 'immutable';
import { atstus, isidpatches } from '../../../../../notreduxs/interface';
@Component({
  selector: 'app-not-edpth',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './not-edpth.component.html',
  styleUrl: './not-edpth.component.css'
})
export class NotEdpthComponent implements OnInit {
  @Input('uotsedx') uotsedx!: number;

  notpods!: Observable<number>;
  wons!: Observable<string>;
  ilbers!: Observable<boolean>
  awses!: Observable<boolean | undefined>;
  atstuses!: Observable<atstus | undefined>;
  constructor(
    private notostre: Store
  ) {
    
  }
  ngOnInit(): void {
    this.notpods = this.notostre.select(eslectorsstoledsfacentfutureserrorsnotpods(this.uotsedx));
    this.wons = this.notostre.select(eslectorsstoledsfacentfutureserrorswons(this.uotsedx));
    this.ilbers = this.notostre.select(eslectorsstoledsfacentfutureserrorsilbers(this.uotsedx));
    this.awses = this.notostre.select(eslectorsstoledsfacentfuturesnotdepthsawseseftches(this.uotsedx));
    this.atstuses = this.notostre.select(eslectorsstoledsfacentfuturesnotdepthsawsesbehinds(this.uotsedx));
  }

  stoleds() {
    this.notostre.dispatch<isidpatches<number>>({
      type: sidpatchesstoledsfacentfuturesnotdepthseftches,
      payload: this.uotsedx
    })
  }

}
