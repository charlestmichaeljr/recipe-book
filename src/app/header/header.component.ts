import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() panelSelected = new EventEmitter<{name: string}>();

  constructor() { }

  ngOnInit() {
  }

  showPanel(panelToShow: string) {
    this.panelSelected.emit({name: panelToShow});
  }
}
