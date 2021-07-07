import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNG
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
