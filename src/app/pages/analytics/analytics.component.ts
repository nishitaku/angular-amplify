import { Component, OnInit } from '@angular/core';
import { Analytics } from 'aws-amplify';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Analytics.record({ name: 'openAnalyticsPage' });
    console.log('send openAnalyticsPage event');
  }
}
