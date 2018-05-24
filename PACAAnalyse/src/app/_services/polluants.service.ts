import { Injectable } from '@angular/core';
import { Polluant } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class PolluantsService {
  polluants = [new Polluant('cadmium', 'Cd'), new Polluant('pH'), new Polluant('oxygene dissous', 'O2'), new Polluant('matieres en suspension', 'MES')];

  constructor() { }

  getPolluants() {
    return this.polluants;
  }
}
