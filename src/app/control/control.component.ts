import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Pump Control - Puma")
   }

  ngOnInit(): void {
  }

}
