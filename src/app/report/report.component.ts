import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Tank Reports - Puma")
   }

  ngOnInit(): void {
  }

}
