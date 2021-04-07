import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Pump Sales - Puma")
   }

  ngOnInit(): void {
  }

}
