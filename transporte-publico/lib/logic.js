/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Funcion para realizar una transaccion = usuario de bus utiliza el transporte
 * @param {org.usac.transporte.Pago} pago The sample transaction instance.
 * @transaction
 */
function pago(pago){
  var factory = getFactory();
  var NS = 'org.usac.transporte';

  var total = 0.0;
  var cuotaDia = 1.50;
  var cuotaNoche = 2.00;

  var usuario = pago.usuario;
  var periodo = pago.periodo;
  var piloto  = pago.autobus.piloto;

  if(usuario.edad <= 18 || usuario.edad >= 60){
  	total = 0.0;
  }else{
    if(periodo == "DIA"){
      total = cuotaDia;
    }else{
      total = cuotaNoche;
    }
  }

  usuario.saldo -= total;
  piloto.numeroTransacciones += 1;

  return getParticipantRegistry(NS + '.Usuario')
  		.then(function(registroUsuarios){
  			return registroUsuarios.update(usuario);
  		})
  		.then(function(){
  			return getParticipantRegistry(NS + '.Piloto')
  		})
  		.then(function(registroPilotos){
  			return registroPilotos.update(piloto);
  		})
}
