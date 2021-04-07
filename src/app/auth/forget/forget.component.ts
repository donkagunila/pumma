import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Reset password - Puma")
   }

  ngOnInit(): void {
  }

}
