export class ProcesoIn {
    idCliente: string;
    runCandidato?: string;
    dni_Pasaporte?: string;
    vigencia?: string = "";
    estado?: string = "";
    resultado?: string = "";
    fechaInicio?: string;
    fechaFinal?: string;
    zonaFaena?: string = "";

    constructor() {
        this.idCliente = '0';
    }
}