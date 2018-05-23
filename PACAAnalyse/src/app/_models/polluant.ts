export class Polluant {

    static count = 0;
    public nom : string;
    public formule : string;
    public id = 0;

    constructor (nom = "", formule = "") {
        this.id = Polluant.count++;
        this.nom = nom;
        this.formule = formule;
        
    }
}
