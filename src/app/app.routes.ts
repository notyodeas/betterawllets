import { Routes } from '@angular/router';
import { EndsComponent } from './notroute/ends/ends.component';
import { AhaComponent } from './notroute/aha/aha.component';
import { EdfaultsComponent } from './notroute/edfaults/edfaults.component';
import { AuthGuard } from './notguards.service';
import { AttackedsComponent } from './notroute/edfaults/attackeds/attackeds.component';
import { ArtnsactionComponent } from './notroute/edfaults/artnsaction/artnsaction.component';
import { CeivedsComponent } from './notroute/edfaults/artnsaction/ceiveds/ceiveds.component';
import { AnticeedsComponent } from './notroute/edfaults/artnsaction/anticeeds/anticeeds.component';
import { AlcimedsComponent } from './notroute/edfaults/artnsaction/alcimeds/alcimeds.component';
import { ErceivedsComponent } from './notroute/edfaults/artnsaction/erceiveds/erceiveds.component';
import { StoledsfacentfuturesComponent } from './notroute/edfaults/artnsaction/stoledsfacentfutures/stoledsfacentfutures.component';
import { EdpthOrfmUsbmitsComponent } from './notroute/edfaults/edpth-orfm-usbmits/edpth-orfm-usbmits.component';
import { OpolsComponent } from './notroute/edfaults/artnsaction/opols/opols.component';

export const routes: Routes = [
    {
        path: '', component: EndsComponent
    },
    {
        path: 'aha', component: AhaComponent
    },
    {
        path: 'edfaults', component: EdfaultsComponent, canActivate: [AuthGuard]
    },
    {
        path: 'edfaults/attackeds', component: AttackedsComponent, canActivate: [AuthGuard]
    },
    {
        path: 'edfaults/artnsaction', component: ArtnsactionComponent, canActivate: [AuthGuard]
    },
    {
        path: 'edfaults/ilmits/:rarow', component: CeivedsComponent, canActivate: [AuthGuard]
    },
    {
        path: 'edfaults/notedpths-orfm-usbmits', component: EdpthOrfmUsbmitsComponent, canActivate: [AuthGuard]
    },
    {
        path: 'edfaults/artnsaction/erceiveds', component: ErceivedsComponent, canActivate: [AuthGuard]
    },
    {
        path: 'edfaults/artnsaction/anticeeds', component: AnticeedsComponent, canActivate: [AuthGuard]
    },
    {
        path: 'edfaults/artnsaction/alcimeds', component: AlcimedsComponent, canActivate: [AuthGuard]
    },
    {
        path: 'edfaults/artnsaction/opols', component: OpolsComponent, canActivate: [AuthGuard]
    },
    {
        path: 'edfaults/artnsaction/stoledstfacentfutures-not-edpth', component: StoledsfacentfuturesComponent, canActivate: [AuthGuard]
    }
];
