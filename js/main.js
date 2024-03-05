function atencionPersonalizada() {
    prompt("Lo lamentamos mucho, déjanos tu número así nos contactamos contigo para una atención personalizada");
    alert("Gracias, pronto nos contactaremos contigo...");
} 
function IngresoDatosDeTarjeta(boleto){
    let tarjeta= prompt( "Gracias por confiar en nosotros, tu proceso de compra esta por terminar, el monto a pagar son $" + boleto + ". Ingresa los 16 números de la parte frontal de tu tarjeta.")
    if(tarjeta.length !==16){

        alert("El número de tarjeta debe tener exactamente 16 caracteres. Por favor, vuelve a intentarlo.");

    }else{
        let ventarjeta= prompt("Ingresa la fecha de vencimiento de tu tarjeta MMAA");
        if(ventarjeta.length !==4){
            alert("El número ingresado no cumple el formato de vencimiento. Por favor, vuelve a intentarlo.");
        }else{
            let codigotarjeta= prompt( "ingresa los tres digitos de la parte posterior de tu tarjeta CVV");
            if (codigotarjeta.length !==3){

                alert("El número ingresado no cumple el formato de CVV. Por favor, vuelve a intentarlo.");

            }else{
                alert("Validando tu datos. Presione Aceptar")
                alert("Compra exitosa")
                alert("El comprobante de pago y todos los detalles de tu compra te lo enviaremos a tu correo electronico: " + mail)
                comprarealizada= true;
                
            }
        }
    }     
}

alert("Bienvenido/a a la mejor Agencia de viajes de Argentina, gracias por elegirnos.");

let usuario= prompt("Ingresa tu nombre y apellido");

alert( "Hola " + usuario + "; por los momentos estamos trabajando solo con personas que quieran iniciar su viaje desde Buenos Aires, Argentina." );

let mail= prompt ("Por favor ingresa tu correo electronico")

let requisito= prompt ("¿Tu viaje inicia en Buenos Aires, Argentina?");

//Variable para verificar que la compra se realizo 
let comprarealizada= false;
//Requisito para que todo tipo de si sea aceptado
if (requisito.toLowerCase() === "si" ) {
    alert("Buenisimo, ya puedes cotizar tu viaje con nosotros");
    let numerodepasajeros= prompt("¿Cuantas personas van a viajar?");
    //Numero de pasajero mayor o igual a 1
    if (isNaN(numerodepasajeros) || numerodepasajeros <= 0) {

        alert("Por favor, ingresa un número válido de pasajeros.");
        requisito= true;
    } else{
        const Paquetes = [

            { id: 1, destino: "cataratas de Iguazu", mes: "Febrero", transporte:"terrestre" , precio: 400 },
          
            { id: 2, destino: "cataratas de Iguazu", mes: "Febrero", transporte:"area" , precio: 600},
          
            { id: 3, destino: "Bariloche", mes: "Febrero", transporte:"terrestre" , precio: 500 },
          
            { id: 4, destino: "Bariloche", mes: "Febrero", transporte:"area" , precio: 700 },
          
            { id: 5, destino: "Merlo, San Luis", mes: "Marzo", transporte:"terrestre" , precio: 300  },
          
            { id: 6, destino: "Merlo, San Luis", mes: "Marzo", transporte:"area" , precio: 450  },
          
            { id: 7, destino: "Mendoza", mes: "Marzo", transporte:"area" , precio: 470  },

            { id: 8, destino: "Mendoza", mes: "Marzo", transporte:"area" , precio: 650  },
          
        ];

        function buscarPaquete( arr , id ){
            return arr.find((el) => el.id === id);

        }
        
        let seleccionado= prompt ("Para todos nuestros destinos tenemos dos opciones una aerea y una terrestre, las dos tienen una duracion de 7 dias y 5 noches y tienen incluido Hotel con desayuno y cena. Nuestros paquetes disponibles son los siguientes(Debe introducir el numero de paquete que prefiera); \n1.-Cataratas de Iguazu, mes: Febrero, transporte: terrestre , precio: 400 \n2.-Cataratas de Iguazu, mes: Febrero, transporte: area , precio: 600 \n3.-Bariloche, mes: Febrero, transporte: terrestre , precio: 500 \n4.-Bariloche, mes: Febrero, transporte: area , precio: 700 \n5.-Merlo, San Luis, mes: Marzo, transporte: terrestre , precio: 300  \n6.-Merlo, San Luis, mes: Marzo, transporte: area , precio: 450 \n7.-Mendoza, mes: Marzo, transporte: area , precio: 470  \n8.-Mendoza, mes: Marzo, transporte: area , precio: 650")

        let encontrado = Paquetes.find((paquete) => paquete.id === parseInt(seleccionado));



        let boleto = encontrado.precio * numerodepasajeros;
        IngresoDatosDeTarjeta(boleto);

        
    }

}else{
    
  atencionPersonalizada();
}        