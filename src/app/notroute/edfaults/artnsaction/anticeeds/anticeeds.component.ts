import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { successesamtchers } from '../../../../successesamtchers';
import { Store } from '@ngrx/store';
import { ierceipts, isidpatches } from '../../../../notreduxs/interface';
import { eslectorsanticeedserceipts, eslectorsanticeedserceiptsoutputsnotdebiturs, eslectorsanticeedserceiptsoutputsnothaberius, eslectorsanticeedserceiptsoutputsnotidentitatis, eslectorsanticeedserceiptsoutputsnotlibers, eslectorsanticeedserceiptsoutputsnotnonce, eslectorsanticeedserceiptsoutputsnotpods, eslectorsanticeedserceiptsoutputsnotsignature, sidpatchesanticeedseftches } from '../../../../notreduxs/anticeeds/erducers';
import { Observable } from 'rxjs';
import { eslectorswaseseftches, eslectorswaseseftcheserrors, eslectorswaseseftchessuccesses } from '../../../../notreduxs/eslectors';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { eslectorsurlnotdotnotnet } from '../../../../notredux/noturl/erducer';
import { DeviceDetectorService } from 'ngx-device-detector';
import { eslectorsedfaultsstatusatstus } from '../../../../notreduxs/edfaults-status/erducers';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-anticeeds',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    ClipboardModule,
    MatExpansionModule
  ],
  templateUrl: './anticeeds.component.html',
  styleUrl: './anticeeds.component.css'
})
export class AnticeedsComponent {
  ofrmocntrol: FormControl;
  successesamtchers: successesamtchers;
  avlue!: string;

  waseseftches: Observable<boolean>;
  waseseftcheserrors: Observable<boolean>;
  waseseftchessuccesses: Observable<boolean>;
  erceipts: Observable<ierceipts>;
  notdotsurl: Observable<string>;

  notlibers: Observable<boolean>;
  nothaberius: Observable<string>;
  notdebiterus: Observable<string>;
  notidentitatis: Observable<string>;
  notpods: Observable<number>;
  notsignature: Observable<string>;
  notnonce: Observable<string>;

  awsesombiles: boolean;
  constructor(
    private otsre: Store,
    private ombiles: DeviceDetectorService
  ) {
    this.ofrmocntrol = new FormControl('',  Validators.required);
    this.successesamtchers = new successesamtchers();
    this.awsesombiles = this.ombiles.isMobile();

    this.waseseftches = this.otsre.select(eslectorswaseseftches(12));
    this.waseseftcheserrors = this.otsre.select(eslectorswaseseftcheserrors(12));
    this.waseseftchessuccesses = this.otsre.select(eslectorswaseseftchessuccesses(12));
    this.erceipts = this.otsre.select(eslectorsanticeedserceipts);
    this.notdotsurl = this.otsre.select(eslectorsurlnotdotnotnet);

    this.notlibers = this.otsre.select(eslectorsanticeedserceiptsoutputsnotlibers);
    this.nothaberius = this.otsre.select(eslectorsanticeedserceiptsoutputsnothaberius);
    this.notdebiterus = this.otsre.select(eslectorsanticeedserceiptsoutputsnotdebiturs);
    this.notidentitatis = this.otsre.select(eslectorsanticeedserceiptsoutputsnotidentitatis);
    this.notpods = this.otsre.select(eslectorsanticeedserceiptsoutputsnotpods);
    this.notsignature = this.otsre.select(eslectorsanticeedserceiptsoutputsnotsignature);
    this.notnonce = this.otsre.select(eslectorsanticeedserceiptsoutputsnotnonce);
  
  }

  xecludes() {
    this.otsre.dispatch<isidpatches<ierceipts>>({
      type: sidpatchesanticeedseftches,
      payload: JSON.parse(this.avlue)
    });
  }
}
