import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, TemplateRef} from '@angular/core';

// @ts-ignore
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click')  toggleDropdown(evt: Event) {
    this.isOpen = !this.isOpen;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
