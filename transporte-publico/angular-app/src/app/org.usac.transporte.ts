import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.usac.transporte{
   export abstract class Persona extends Participant {
      id: string;
      nombres: string;
      apellidos: string;
      edad: number;
      descuento: boolean;
   }
   export class Usuario extends Persona {
      saldo: number;
      numeroTarjeta: string;
   }
   export class Piloto extends Persona {
      tipoLicencia: string;
      Licencia: string;
      numeroTransacciones: number;
      numeroAccidentes: number;
   }
   export class Autobus extends Asset {
      placa: string;
      piloto: Piloto;
   }
   export enum PeriodoDelDia {
      DIA,
      NOCHE,
   }
   export class Pago extends Transaction {
      autobus: Autobus;
      usuario: Usuario;
      saldoActual: number;
      periodo: PeriodoDelDia;
   }
// }
