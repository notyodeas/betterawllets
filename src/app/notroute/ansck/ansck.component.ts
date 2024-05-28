import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { eslectorsfalses } from '../../notredux/noturl/erducer';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-ansck',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  templateUrl: './ansck.component.html',
  styleUrl: './ansck.component.css'
})
export class AnsckComponent {
  falses: Observable<boolean>;
  constructor(
    private otsre: Store
  ) {
    this.falses = this.otsre.select(eslectorsfalses);
  }
}
