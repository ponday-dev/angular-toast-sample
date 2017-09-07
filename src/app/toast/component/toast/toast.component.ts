import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ToastOptions } from '../../common/toast-options';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: '[toast]',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @HostBinding('style.background-color') bg: string;
  @HostBinding('style.color') color: string;
  @Input('option') option: ToastOptions;

  constructor(private toast: ToastService) { }

  ngOnInit() {
    this.bg = this.option.theme;
    this.color = this.option.color;
  }

  onClick() {
    this.toast.hide(this.option);
  }
}
