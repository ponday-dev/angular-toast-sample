import { Component, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable, Subscription } from 'rxjs';
import { ToastService } from '../../services/toast.service';
import { ToastOptions } from '../../common/toast-options';

@Component({
  selector: '[toast-container]',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
  animations: [
    trigger('inOut', [
      state('in', style({
        opacity: 1,
        transform: 'scale(1) translateX(0)'
      })),
      transition(':enter', [
        style({ transform: 'scale(0) translateX(0)'}),
        animate('120ms ease-in')
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'scaleY(0) translateX(100%)' }))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastContainerComponent {

  toasts$: Observable<ToastOptions[]>;

  constructor(private toast: ToastService) {
    this.toasts$ = toast.toasts$;
  }

}
