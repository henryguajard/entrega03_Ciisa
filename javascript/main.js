//////////////////////////////////////////////////////////////////////////////////
//entrega03 desarrollo web ciisa
const formulario = document.querySelector("#form")
const nombre = document.querySelector("#nombre_form").value;
const apellido = document.querySelector("#apellido_form").value;
let inicio_Hospedaje = document.querySelector("#inicio_Hospedaje").value;
let fin_Hospedaje = document.querySelector("#fin_Hospedaje").value;
let tipo_habitacion = document.querySelector("#tipo_habitacion").value;
const formulari_enviar = document.querySelector("#form_enviar");

let generar_modal = document.querySelector("#generar_modal");
const modal = document.querySelector("#Modal");
const myModal = new bootstrap.Modal(modal);
let nombre_modal = document.querySelector("#nombre_modal");
let apellido_modal = document.querySelector("#apellido_modal");
let inicioH_modal = document.querySelector("#inicioH_modal");
let finH_modal = document.querySelector("#finH_modal");
let tipoH_modal = document.querySelector("#tipoH_modal");
let total_modal = document.querySelector("#total_modal");
//////////////////////////////////////////////////////////////////////////////////
//funcion campo nombre espacios blancos
function spacios_blancos_Nombre() {
    let inputTexto = document.querySelector("#nombre_form");
    inputTexto.addEventListener("keyup", e => {
        let spacios = e.target.value;
        e.target.value = spacios.trim();

    })


}
//////////////////////////////////////////////////////////////////////////////////
//funcion campo nombre  letra mayuscula
function letra_mayuscula_Nombre() {
    let inputTexto = document.querySelector("#nombre_form");
    inputTexto.addEventListener('input', () => {
        let input = inputTexto.value;
        let mayuscula = input.charAt(0).toUpperCase() + input.slice(1);
        inputTexto.value = mayuscula;

    })

}
//////////////////////////////////////////////////////////////////////////////////    
//funcion campo apellido espacios en blanco
function spacios_blancos_Apellido() {
    let inputTexto = document.querySelector("#apellido_form");
    inputTexto.addEventListener("keyup", e => {
        let spacios = e.target.value;
        e.target.value = spacios.trim();

    })

}
//////////////////////////////////////////////////////////////////////////////////
//funcion campo apellido letra mayuscula
function letra_mayuscula_Apellido() {
    let inputTexto = document.querySelector("#apellido_form");
    inputTexto.addEventListener('input', () => {
        let input = inputTexto.value;
        let mayuscula = input.charAt(0).toUpperCase() + input.slice(1);
        inputTexto.value = mayuscula;
    })

}

//////////////////////////////////////////////////////////////////////////////////
// funcion calculo diferencia dias
function diferencia_dias() {

    inicio_Hospedaje = document.querySelector("#inicio_Hospedaje").value;
    fin_Hospedaje = document.querySelector("#fin_Hospedaje").value;

    let inicio = new Date(inicio_Hospedaje);
    let fin = new Date(fin_Hospedaje);

    let diferencia_Tiempo = fin.getTime() - inicio.getTime();
    let diferencia_Dias = Math.floor(diferencia_Tiempo / (1000 * 60 * 60 * 24) + 1);
    return diferencia_Dias;
}

const resultado_dif_dias = diferencia_dias();

//////////////////////////////////////////////////////////////////////////////////      
//funcion calcular el pago
function calculo_pago() {

    const resultado_dif_dias = diferencia_dias();
    let tipo_habitacion = document.querySelector("#tipo_habitacion").value;
    if (tipo_habitacion == "Habitacion Simple ") {
        let habitacion_Simple = 30000;
        pagar = habitacion_Simple * resultado_dif_dias;
        return pagar;

    } else if (tipo_habitacion == "Habitacion Doble ") {
        let habitacion_Doble = 60000;
        pagar = habitacion_Doble * resultado_dif_dias;
        return pagar;

    } else if (tipo_habitacion == "Habitacion Triple ") {
        let habitacion_Triple = 90000;
        pagar = habitacion_Triple * resultado_dif_dias;
        return pagar;

    } else if (tipo_habitacion == "Habitacion Deluxe ") {
        let habitacion_Deluxe = 120000;
        pagar = habitacion_Deluxe * resultado_dif_dias;
        return pagar;
    }
}
const resultado_calculo_pago = calculo_pago();
//////////////////////////////////////////////////////////////////////////////////        
// crear funcion limitar fecha de inicio 
function limitar_inicio_fin() {
    let inicio_Hospedaje = document.querySelector("#inicio_Hospedaje");
    let fin_Hospedaje = document.querySelector("#fin_Hospedaje");

    fin_Hospedaje.addEventListener('change', () => {
        console.log('click');
        const nuevo_Inicio = new Date(inicio_Hospedaje.value);
        const nuevo_Fin = new Date(fin_Hospedaje.value);

        if (nuevo_Inicio > nuevo_Fin) {
            alert('fecha final del hospedaje no puede ser menor a la fecha de inicio del hospedaje')
            fin_Hospedaje.value = '';
        }
    })
};
function limitar_inicio_fin2() {
    let inicio_Hospedaje = document.querySelector("#inicio_Hospedaje");
    let fin_Hospedaje = document.querySelector("#fin_Hospedaje");

    inicio_Hospedaje.addEventListener('change', () => {
        console.log('click');
        const nuevo_Inicio = new Date(inicio_Hospedaje.value);
        const nuevo_Fin = new Date(fin_Hospedaje.value);

        if (nuevo_Inicio > nuevo_Fin) {
            alert('fecha final del hospedaje no puede ser menor a la fecha de inicio del hospedaje')
            inicio_Hospedaje.value = '';
        }

    })

};




//////////////////////////////////////////////////////////////////////////////////
// funcion capturar checkbox
function capturar_checkbox() {

    let adicional = document.querySelector("#adicional_modal");
    const checkboxs = document.querySelectorAll('.checkbox');

    generar_modal.addEventListener('click', function () {


        adicional.innerHTML = '';
        checkboxs.forEach((e) => {
            if (e.checked == true) {
                console.log(e.value);
                elemento = document.createElement('li');

                elemento.className = 'adicional_modal'
                elemento.innerHTML = e.value;
                adicional.appendChild(elemento);
                myModal.show();

            }

        }

        );

    })

}


//////////////////////////////////////////////////////////////////////////////////
//ejecutar funciones para validar condiciones en el formulario

spacios_blancos_Nombre();
letra_mayuscula_Nombre();

spacios_blancos_Apellido();
letra_mayuscula_Apellido();
limitar_inicio_fin2()
limitar_inicio_fin();

capturar_checkbox();


//////////////////////////////////////////////////////////////////////////////////  
//funcion datos modal
function datos_modal() {
    const resultado_calculo_pago = calculo_pago();
    const resultado_dif_dias = diferencia_dias();

    const nombre = document.querySelector("#nombre_form").value;
    const apellido = document.querySelector("#apellido_form").value;
    let inicio_Hospedaje = document.querySelector("#inicio_Hospedaje").value;
    let fin_Hospedaje = document.querySelector("#fin_Hospedaje").value;
    let tipo_habitacion = document.querySelector("#tipo_habitacion").value;
    let estadia_modal = document.querySelector("#estadia_modal");
    nombre_modal.innerText = nombre;
    apellido_modal.innerText = apellido;
    inicioH_modal.innerText = inicio_Hospedaje;
    finH_modal.innerText = fin_Hospedaje;
    estadia_modal.innerText = resultado_dif_dias;
    tipoH_modal.innerText = tipo_habitacion;
    total_modal.innerText = resultado_calculo_pago;

    myModal.show();

}

//////////////////////////////////////////////////////////////////////////////////
// generar modal 

generar_modal.addEventListener('click', function (evento) {

    const nombre = document.querySelector("#nombre_form");
    const apellido = document.querySelector("#apellido_form");
    let tipo_habitacion = document.querySelector("#tipo_habitacion");
    let inicio_Hospedaje = document.querySelector("#inicio_Hospedaje");
    let fin_Hospedaje = document.querySelector("#fin_Hospedaje")
    console.log('clik');

    if (nombre.value === '' || apellido.value === '' || tipo_habitacion.value === '' || inicio_Hospedaje.value === '' || fin_Hospedaje.value === '') {
        alert("campos requeridos");
        return;
    }
    evento.preventDefault();

    datos_modal();
    diferencia_dias();
    calculo_pago()
    capturar_checkbox();
});

//////////////////////////////////////////////////////////////////////////////////
// enviar formulario desde modal 

formulari_enviar.addEventListener('click', function () {
    alert('Reserva realizada con exito');
    formulario.submit();
})
