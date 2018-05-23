import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions = [{'nom': 'PACA'},{'nom': 'Bretagne'},{'nom': 'Normandie'},{'nom': 'Pays de la Loire'},{'nom': 'Nouvelle Aquitaine'},
  {'nom': 'Occitanie'}, {'nom': 'Auvergne Rhône Alpes'}, {'nom': 'Bourgogne Franche Comté'}, {'nom': 'Centre Val de Loire'},
  {'nom': 'Grand Est'}, {'nom': 'Ile de France'}, {'nom': 'Hauts de France'}];

  
  constructor() { }

  ngOnInit() {
  }


}
