import { Injectable } from '@angular/core';
import { Polluant } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class PolluantsService {
  polluants = [new Polluant('cadmium', 'Cd', 'eaux usées', 5, 'spectro','Cd.jpg'), new Polluant('pH'), new Polluant('oxygene dissous', 'O2'), new Polluant('matieres en suspension', 'MES')];

  constructor() { }

  getPolluants() {
    return this.polluants;
  }

  getPolluantById(id: number): Polluant {
    return this.polluants.filter(p => p.id === id)[0];
  }
} 
