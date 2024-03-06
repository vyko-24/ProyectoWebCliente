import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AlertClient = withReactContent(Swal);

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