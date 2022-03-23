import { stringify } from "querystring";

export class UsuarioPortal {
    id: number;
    nombreUsuario: string;
    correo: string;
    urlServicio:string;
    /**
     *
     */
    constructor() {
        this.id = 0;
        this.nombreUsuario = '';
        this.correo = '';
        this.urlServicio = '';


    }

}
