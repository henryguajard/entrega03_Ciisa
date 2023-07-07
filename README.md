# entrega03_Ciisa
evaluacion calificada del ramo tecnologias web instituto de ciencias tecnologicas CIISA
Caso

 La empresa Gran Hostal Chile dedicada al arriendo de habitaciones turísticas ha tenido graves problemas en poder captar público por medio de plataformas web, esto se ha visto motivado debido a que su página no cuenta con un formulario avanzado que le permita capturar las reservas de forma correcta ocasionando pérdidas económicas importantes.
 Es por ello que nos ha pedido a nosotros que podamos crear un formulario con funciones avanzadas las cuales se listan a continuación:

1.         Creación de una Reserva: La estructura de la página debe estar dividida de la siguiente forma:
a.         Menú con el logo de la empresa.
b.         Descripción de la página.
c.          Formulario de reserva con los siguientes datos:
     i.      Nombre de la persona que realiza la reserva. (Campo texto)
     ii.      Fecha de Inicio del hospedaje. (Campo date)
     iii.      Fecha fin del hospedaje. (Campo date)
     iv.      Tipo de Habitación. (Simple, Doble, Triple, Deluxe). (Campo select)
     v.      Servicios adicionales (Campo checkbox) que incluyan las siguientes opciones:
1.      Desayuno
2.      Internet
3.      Agua caliente
4.      Mascotas
                                                  vi.     Botón de enviar.
2.       Funcionalidades deseadas en Javascript:
a.       El campo nombre no puede contener espacios en blanco y debe marcar la primera letra  en mayúscula.
b.       La fecha de inicio no debe ser mayor a la fecha de fin.
c.        Se debe realizar un calculo por noche en funcion a cada tipo de habitación usando los siguientes valores:  
  i.      Habitación Simple. Precio 30.000 CLP por noche.
                                                   ii.      Habitación Doble. Precio 60.000 CLP por noche.
                                                  iii.      Habitación Triple. Precio 90.000 CLP por noche.
                                                  iv.      Habitación Deluxe. Precio 120.000 CLP por noche.

d.       El formulario no puede hacer submit al presionar el botón enviar sino que debe levantar una modal con todos los datos incluyendo el precio total por noches. Esta modal deberá tener un boton reservar que si ejecutará el submit del form.

3.       Se requiere que la aplicación use las mejores prácticas por lo que se desea que los scripts sean funcionales y que estén separados en funciones pequeñas para mejorar la carga de la página.
Detalles:
    Elabore la solución usando etiquetas HTML5.
    Elabore una hoja de estilos CSS (en caso de ser necesario).
    Elabore un archivo con los scripts JS.   
