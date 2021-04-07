import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Discounts - Puma")
   }

  ngOnInit(): void {
  }

}
