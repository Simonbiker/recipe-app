import { Directive, HostListener, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen = false;

  constructor() { }
  ngOnInit() {

  }

  @HostListener('clicked') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
}
