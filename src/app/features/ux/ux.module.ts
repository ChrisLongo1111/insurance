import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MessageDialogComponent } from './components/message-dialog/message-dialog.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    MessageDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [ConfirmDialogComponent, MessageDialogComponent]
})
export class UxModule { }
