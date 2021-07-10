import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNG
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
