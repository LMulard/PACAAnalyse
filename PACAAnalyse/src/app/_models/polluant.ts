export class Polluant {

    static count = 0;
    public nom : string;
    public formule : string;
    public id = 0;
    public source : string;
    public seuilLimite : number;
    public detection : string;
    public photo : string;


    constructor (nom = "", formule = "", source = "", seuilLimite = null, detection = "", photo = "") {
        this.id = Polluant.count++;
        this.nom = nom;
        this.formule = formule;
        this.source = source;
        this.seuilLimite = seuilLimite;
        this.detection = detection;
        this.photo = photo;

        
    }
}
