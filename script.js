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

const loader = document.querySelector("#loader");

loader.style.display = 'none';

const search_solicitude = async () => {
  if(inputCodigo.value !== ''){
    const solicitude = solicitudes.find(element => element.numero === inputCodigo.value);
    loader.style.display = 'block';
    await sleep();

    if(solicitude) {
      proceso.innerText = solicitude.proceso;
      titulo.innerText = solicitude.titulo;
      numero.innerText = solicitude.numero;
      estado.innerText = solicitude.estado;
      creador.innerText = solicitude.creador;
      fecha.innerText = solicitude.fecha;
      ultima.innerText = solicitude.ultima;
      descripcion.innerText = solicitude.descripcion;
      alertify.success('Se encontró la solicitud.');
    } else {
      proceso.innerText = '';
      titulo.innerText = '';
      numero.innerText = '';
      estado.innerText = '';
      creador.innerText = '';
      fecha.innerText = '';
      ultima.innerText = '';
      descripcion.innerText = '';
      alertify.error('No existe la solicitud que usted está buscando.');    
    }
    loader.style.display = 'none';
  }else {
    alertify.warning('El campo código de solicitud no debe estar vacío.');
    inputCodigo.focus(); 
  }
}


const sleep = async ()=> {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('success');
    }, 1000)
  });
}

btnBuscar.addEventListener('click', async ()=> {
  search_solicitude();
});

btnLimpiar.addEventListener('click', ()=> {
  inputCodigo.value = '';
  proceso.innerText = '';
  titulo.innerText = '';
  numero.innerText = '';
  estado.innerText = '';
  creador.innerText = '';
  fecha.innerText = '';
  ultima.innerText = '';
  descripcion.innerText = '';
});


inputCodigo.addEventListener('keydown', ()=> {
  if(event.key === 'Enter') {
    search_solicitude();       
  }
});

