import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Stations - Puma")
   }

  ngOnInit(): void {
  }

}
