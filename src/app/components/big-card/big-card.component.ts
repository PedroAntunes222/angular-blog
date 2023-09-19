import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';
  @Input()
  Id: string = '0';

  constructor() {}

  ngOnInit(): void {
    this.cutTexts();
  }

  cutTexts() {
    // this.cardTitle = this.cardTitle.slice(0, 25);
    this.cardDescription = this.cardDescription.slice(0, 70);
    this.cardDescription = this.cardDescription + "...";
  }
}
