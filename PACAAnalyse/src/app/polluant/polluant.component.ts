import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Polluant } from '../_models';
import { PolluantsService } from '../_services/polluants.service';

@Component({
  selector: 'app-polluant',
  templateUrl: './polluant.component.html',
  styleUrls: ['./polluant.component.css']
})
export class PolluantComponent implements OnInit {
  param : number;
  polluant;

  constructor(private activatedRoute : ActivatedRoute, private polluantsService : PolluantsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => this.loadPolluant(p['id']))
   
  }

  loadPolluant(id : string) {
    this.param = +id; // si la string id (p['id']) est un nombre on le convertit en number
    this.polluant = this.polluantsService.getPolluantById(this.param);
  }

}
