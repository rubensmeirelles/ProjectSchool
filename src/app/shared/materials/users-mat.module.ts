import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatTabsModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [],
  providers: [

  ]
})
export class UsersMaterialModule { }
