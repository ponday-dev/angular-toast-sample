import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastContainerComponent } from './component/toast-container/toast-container.component';
import { ToastComponent } from './component/toast/toast.component';
import { ToastService } from './services/toast.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserAnimationsModule,
    ToastContainerComponent,
    ToastComponent
  ],
  declarations: [
    ToastContainerComponent,
    ToastComponent
  ],
  entryComponents: [
    ToastComponent
  ],
  providers: [
    ToastService
  ]
})
export class ToastModule { }
