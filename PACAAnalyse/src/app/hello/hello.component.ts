import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  etudiant = { 'nom': 'famille', 'age': 30, 'saved': false };
  etudiants = [{'nom': 'jskjd'}, {'nom': 'clkjqd'}, {'nom': 'cqsfd'}, {'nom' : 'odqkspdm'}];
  
  constructor() { }

  ngOnInit() {
  }
  getEtudiant(): void {
    this.etudiant.nom = 'default';
  }

  saveEtudiant(){
    this.etudiant.saved = true;
  }

}
