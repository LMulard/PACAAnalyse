import { Component, OnInit } from '@angular/core';
import { Polluant } from '../_models';

@Component({
  selector: 'app-polluants',
  templateUrl: './polluants.component.html',
  styleUrls: ['./polluants.component.css']
})
export class PolluantsComponent implements OnInit {
 /*polluants = [{'nom': 'pH', 'formule': ''}, {'nom': 'oxygene dissous', 'formule': 'O2'}, {'nom': 'Matières en suspension', 'formule': 'MES'},
  {'nom': 'carbone organique total', 'formule': 'COT'}, {'nom': 'nitrates', 'formule': 'NO3-'}];
  polluant = {'nom': '', 'formule': ''};*/

  edit = false;
  polluants = [new Polluant('cadmium'), new Polluant('pH'), new Polluant('oxygene dissous', 'O2'), new Polluant('matieres en suspension', 'MES')];
  polluant = new Polluant();

  constructor() { }

  ngOnInit() {
  }

  /*addPolluant(){
    this.polluants.push(this.polluant);
    this.polluant = {'nom': '', 'formule': ''};

  }*/

  addPolluant(){
    this.polluants.push(this.polluant);
    this.polluant = new Polluant();

  }

  editPolluant(id : number){
    this.polluant = this.getPolluantById(id);
    this.edit = true;
  }

  getPolluantById(id : number) : Polluant {
   /* for (let i = 0; i<this.polluants.length; i++){
      if (this.polluants[i].id ===id){
        return this.polluants[i];
      }
    }
    return null;*/

    return this.polluants.filter (p => p.id === id) [0];
  }

  editOver(){
    this.edit=false;
    this.polluant = new Polluant();
  }
}
