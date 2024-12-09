# Hora Mundial

**Hora Mundial** es una aplicación web sencilla que muestra la hora actual de cualquier parte del mundo utilizando una lista de zonas horarias. Es ideal para aprender a trabajar con APIs y manejar datos dinámicos en JavaScript.

## Características
- Selección de zonas horarias desde una lista desplegable.
- Visualización de la hora y fecha actual de la zona seleccionada.
- Compatible con [TimeZoneDB API](https://timezonedb.com).

---

## Tecnologías utilizadas
- **HTML5**: Estructura de la página.
- **CSS3**: Estilo visual.
- **JavaScript**: Lógica del cliente y manejo de datos dinámicos.
- **API de TimeZoneDB**: Fuente de información de zonas horarias.

---

## Configuración del proyecto

### 1. Clonar el repositorio
```bash
git clone https://github.com/Kenkyoo/Hora-Mundial.git
cd Hora-Mundial

2. Obtener una API Key de TimeZoneDB

    Ve a TimeZoneDB y regístrate.
    Copia tu API Key de TimeZoneDB.

3. Configurar el proyecto

Edita el archivo app.js para incluir tu API Key en la variable correspondiente:

const API_KEY = "TU_API_KEY";

4. Ejecutar la aplicación localmente

    Abre el archivo index.html en tu navegador.
    Asegúrate de estar conectado a internet para que las solicitudes a la API funcionen.

Uso

    Selecciona una zona horaria del desplegable.
    La aplicación mostrará:
        La hora actual en la zona seleccionada.
        La fecha actual en formato AAAA-MM-DD.
        Información adicional, como el día de la semana, el día del año y el número de la semana.

Implementación en línea

El proyecto se puede probar en: GitHub Pages (actualiza el enlace si es necesario).
Créditos

    Hecho por Kenkyoo.
    Repositorio en GitHub: https://github.com/Kenkyoo.

Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente. Consulta el archivo LICENSE para más detalles.
