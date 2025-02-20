# Formulario de Registro

Este proyecto contiene un formulario de registro en HTML con validación básica utilizando HTML5, y con estilos básicos en CSS. El formulario recopila información personal, de contacto, de cuenta y preferencias del usuario.

## Estructura del Formulario

El formulario está dividido en las siguientes secciones:

1. **Información Personal**:
   - Nombre y Apellidos
   - Fecha de Nacimiento
   - Género (con opciones: Masculino, Femenino, Otro)

2. **Información de Contacto**:
   - Correo Electrónico
   - Número de Teléfono

3. **Información de Cuenta**:
   - Nombre de Usuario
   - Contraseña
   - Confirmación de Contraseña (para validar la coincidencia)

4. **Preferencias**:
   - Color Favorito (con opciones: Rojo, Azul, Verde, Amarillo)
   - Aceptación de Términos y Condiciones (campo obligatorio)

## Estructura de los Archivos

- **index.html**: Contiene el código del formulario en HTML.
- **estilos.css**: Contiene los estilos básicos en CSS para mejorar la apariencia del formulario.

## Organización de los Archivos CSS

Los estilos están organizados en un archivo separado `estilos.css` para mantener la separación entre el contenido y la presentación. Esto facilita la mantenibilidad del código y mejora la legibilidad del proyecto.

Los principales estilos que se han aplicado son:
- **Estilo de los campos de entrada**: Todos los campos de entrada tienen un relleno adecuado y un borde redondeado.
- **Estilos para los botones**: El botón de envío tiene un color de fondo que cambia al pasar el ratón.
- **Distribución del formulario**: El formulario tiene un ancho máximo de 500px y está centrado en la pantalla, lo que facilita su visualización en diferentes tamaños de dispositivos.

## Validaciones Implementadas

El formulario utiliza las validaciones básicas de HTML5:
1. **Campos requeridos**: Se ha utilizado el atributo `required` en campos esenciales como nombre, correo electrónico, teléfono, nombre de usuario, contraseñas, etc.
2. **Formato de correo electrónico**: El campo de correo electrónico usa `type="email"` y un patrón que valida si el correo tiene el dominio adecuado `@gmail.es`.
3. **Formato de teléfono**: El campo de teléfono usa `type="tel"` y un patrón para validar un formato específico de número internacional.

