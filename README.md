#Hackathone MWC Barcelona :smile:

> **Victor Naranjo**.
> Nombre del reto, demo del sitio en -> [MWCdemo](https://ejemplo.com/)...

### Descripción del Proyecto

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip

#### Tecnologias

- Languages: `Javascript - (React)`
- Framework: `Nextjs`
- Testing: `Jest` and `React-Testing-Library`

#### Llamadas a API's

En este proyecto tome la decisión de crear un contenedor personalizado para Fetch en lugar de usar Fetch simple en cada llamada o obtar por alternativas como axios por la siguientes razones:

- `Tamaño de paquete más pequeño`
- `Manejo y corrección de errores simple`
- `Definir un estandar de respuestas en todas las llamadas`

#### Arquitectura del proyecto

Para este proyecto tome la decisión de implementar una arquitectura hexagonal con la finalidad de conseguir un mayor aislamiento entre las diferentes capas del software, a fin de conseguir una mejora en el mantenimiento y escalabilidad del mismo, como tambien facilitar el testing de forma individual

**Nota:** El estilo de arquitectura hexagonal no se ha tomado al pie de la letra y a sido adaptado a las necesidades del proyecto, asi como tambien se han omitido partes del modelo a fin de reducir el timpo de construccion del mismo

##### Estructura

- **tests**: Directorio que contiene todos los test del proyecto

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

##### Ejecutar pruebas

```sh
npm run test # corre las pruebas

npm run test:watch  #corre las pruebas en modo observador

npm run test:coverage # reporte de covertura
```
