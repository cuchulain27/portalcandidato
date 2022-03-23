export class LoginPortal {

    RutCandidato: string
    Correo: string
    Codigo?: string;

    constructor(Codigo: string, RutCandidato: string, Correo: string) {

        this.RutCandidato = RutCandidato;
        this.Correo = Correo;
        this.Codigo = Codigo;
    }
}


