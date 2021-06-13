#Hackathone MWC Barcelona :smile:

> **Victor Naranjo**.
> Reto frontend Hackathone MWC Barcelona , demo del sitio en -> [MWCdemo](https://ackathone-mwc-barcelona.vercel.app/)...

### Descripción del Proyecto

Se pide la realización de una pasarela registro proporcionada por los organizadores del evento,
Para dar el diseño como finalizado nos piden que complemetemos los siguientes objetivos

##### Objetivos

- **Task 1**: Puedo ver las páginas que se muestran en el diseño desde el PC
- **Task 2**: Puedo ver las páginas que se muestran en el diseño desde el móvil
- **Task 3**: Si se intenta pasar de página y el correo introducido no es un correo tiene que abrirse un dialog notificándolo
- **Task 4**: Al acabar el formulario aparece un dialog informando que todo el proceso ha salido correctamente

#### Tecnologias

- Languages: `Javascript - (React)`
- Framework: `Nextjs`

#### Arquitectura del proyecto

Para este proyecto tome la decisión de implementar una arquitectura hexagonal con la finalidad de conseguir un mayor aislamiento entre las diferentes capas del software, a fin de conseguir una mejora en el mantenimiento y escalabilidad del mismo, como tambien facilitar el testing de forma individual

**Nota:** El estilo de arquitectura hexagonal no se ha tomado al pie de la letra y a sido adaptado a las necesidades del proyecto, asi como tambien se han omitido partes del modelo a fin de reducir el timpo de construccion del mismo

##### Estructura

- **pages:** Directorio creado por NextJS para gestionar las páginas de la aplicación

- **public:** Directorio creado por NextJS para los recursos estaticos de la aplicación

- **src:** Directorio nucleo del proyecto

- **src/domain:** Directorio donde se gestiona toda la logica de negocios agnostica a la infraestructura

- **src/infrastructure:** Directorio donde se gestiona la comunicación entre el dominio y el resto de implementaciones

##### Inicializar el proyecto

```sh
npm install # Instala todas las dependencias

npm run dev # Ejecuta el proyecto en modo desarrollo
```
