const proceso = document.querySelector("#proceso");
const titulo = document.querySelector("#titulo");
const numero = document.querySelector("#numero");
const estado = document.querySelector("#estado");
const creador = document.querySelector("#creador");
const fecha = document.querySelector("#fecha");
const ultima = document.querySelector("#ultima");
const descripcion = document.querySelector("#descripcion");

const inputCodigo = document.querySelector("#inputCodigo");

const btnBuscar = document.querySelector("#btnBuscar");
const btnLimpiar = document.querySelector("#btnLimpiar");


const search_solicitude = () => {
  if(inputCodigo.value !== ''){
    if(inputCodigo.value === 'cod001') {
      proceso.innerText = 'Proyectos fotovoltaicos para empresas';
      titulo.innerText = '#13989';
      numero.innerText = '13989';
      estado.innerText = 'Por hacer';
      creador.innerText = 'DEMO CLIENTE';
      fecha.innerText = '2020-07-29 21:31:29';
      ultima.innerText = '2020-07-30 19:56:15';
      descripcion.innerText = 'qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem';
      alertify.success('Se encontro la solicitud.');
    } else {
      proceso.innerText = '--';
      titulo.innerText = '--';
      numero.innerText = '--';
      estado.innerText = '--';
      creador.innerText = '--';
      fecha.innerText = '--';
      ultima.innerText = '--';
      descripcion.innerText = '--';
      alertify.error('No existe la solicitud que usted está buscando.');    
    }
  }else {
    alertify.warning('El campo código de solicitud no debe estar vacio.');
    inputCodigo.focus(); 
  }
}


btnBuscar.addEventListener('click', ()=> {
  search_solicitude();
});

btnLimpiar.addEventListener('click', ()=> {
  inputCodigo.value = '';
  proceso.innerText = '--';
  titulo.innerText = '--';
  numero.innerText = '--';
  estado.innerText = '--';
  creador.innerText = '--';
  fecha.innerText = '--';
  ultima.innerText = '--';
  descripcion.innerText = '--';
});


inputCodigo.addEventListener('keydown', ()=> {
  if(event.key === 'Enter') {
    search_solicitude();       
  }
});

