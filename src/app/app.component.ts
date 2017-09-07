import { Component } from '@angular/core';

import { COLOR_WHITE, COLOR_BLUE } from './toast/common/toast-options';
import { ToastService } from './toast/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private count: number = 0;

  constructor(private toast: ToastService) { }

  onClick() {
    this.toast.show({
      closeAuto: true,
      timeout: 3000,
      message: `トースト：${ ++this.count }`,
      color: COLOR_WHITE,
      theme: COLOR_BLUE
    });
  }

}
