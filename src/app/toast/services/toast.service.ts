import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ToastOptions, ToastOption } from '../common/toast-options';

@Injectable()
export class ToastService {

  private toasts = new ReplaySubject<Data>(1);

  constructor() { }

  get toasts$(): Observable<ToastOptions[]> {
    return this.toasts
      .scan((acc, data) => {
        if (data.op === 'a') return acc.concat(data.value);
        if (data.op === 'd') return acc.filter(v => v.symbol !== data.value.symbol)
      }, [] as ToastOptions[]);
  }

  show(option: ToastOption): ToastOptions {
    const op = new ToastOptions(option);
    if (op.closeAuto) {
      Observable.timer(op.timeout)
        .subscribe( _ => this.hide(op));
    }
    this.toasts.next({ op: 'a', value: op });
    return op;
  }

  hide(option: ToastOptions) {
    this.toasts.next({ op: 'd', value: option });
  }

}

interface Data {
  op: 'a' | 'd';
  value: ToastOptions;
}
