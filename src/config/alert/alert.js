import { Alert } from 'flowbite-react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const AlertClient = withReactContent(Swal);

//Titulos y Mensajes definidos success | error | confirm

//alerta error
//alerta success
//alert confirm

export const CustomAlert = (title, text, icon) => {
    return AlertClient.fire({
      title,
      text,
      icon,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',  
    });
}

export const confirmAlert = (preConfirm) => {
  return AlertClient.fire({
    title:"¿Estás seguro de realizar esta acción?",
    text:"Le solicitamos esperar un momento a que la solicutud termine",
    icon:'info',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#0E7490',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    showLoaderOnConfirm: true,
    allowOutsideClick:()=> AlertClient.isLoading(),
    reverseButtons: true,
    backdrop: true,
    preConfirm,
  });
}