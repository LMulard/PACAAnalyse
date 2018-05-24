import { Component, OnInit, Input } from '@angular/core';
import { Polluant } from '../_models';

@Component({
  selector: 'app-polluant-detail',
  templateUrl: './polluant-detail.component.html',
  styleUrls: ['./polluant-detail.component.css']
})
export class PolluantDetailComponent implements OnInit {
  @Input() polluantDetails: Polluant;
 // polluantDetails = new Polluant('cadmium', 'Cd', 'eaux usees', 5, 'spectrometrie');

  constructor() { }

  ngOnInit() {
  }

}
