import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  exports: [
    MatTabsModule,
    MatIconModule,
    SharedModule
  ],
  declarations: [],
  providers: [

  ]
})
export class UsersMaterialModule { }
