export class LoginEmail {

  RutCandidato: string
  Correo?: string

  constructor(RutCandidato: string, Correo: string) {

      this.RutCandidato = RutCandidato;
      this.Correo = Correo;
  }
}

