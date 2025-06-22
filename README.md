# E-commerce Frontend

## Descripción
Esta es una aplicación de comercio electrónico desarrollada con React. La aplicación proporciona una interfaz de usuario moderna y responsiva para una tienda en línea, incluyendo funcionalidades como listado de productos, carrito de compras, chat en vivo y reproductor de video.

## Tecnologías Utilizadas
- React.js
- Tailwind CSS
- JavaScript/ES6+

## Estructura del Proyecto
```
src/
  ├── App.js              # Componente principal de la aplicación
  ├── CartIndicator.js    # Indicador del carrito de compras
  ├── Footer.js           # Pie de página
  ├── Header.js           # Encabezado de la aplicación
  ├── LiveChat.js         # Componente de chat en vivo
  ├── ProductList.js      # Lista de productos
  ├── VideoPlayer.js      # Reproductor de video
  ├── index.js           # Punto de entrada de la aplicación
  └── index.css          # Estilos globales
```

## Componentes Principales

### App.js
Componente raíz que maneja la estructura principal de la aplicación y el enrutamiento.

### ProductList.js
Muestra la lista de productos disponibles para comprar.

### CartIndicator.js
Muestra el estado actual del carrito de compras y permite al usuario ver los items seleccionados.

### Header.js
Contiene la navegación principal y el logo de la tienda.

### Footer.js
Muestra información de contacto y enlaces importantes.

### LiveChat.js
Proporciona funcionalidad de chat en vivo para soporte al cliente.

### VideoPlayer.js
Permite la reproducción de videos relacionados con los productos.

## Instalación

1. Clona el repositorio:
```bash
git clone <URL_del_repositorio>
```

2. Instala las dependencias:
```bash
cd shopify_front
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm build`: Crea una versión optimizada para producción
- `npm test`: Ejecuta las pruebas
- `npm run eject`: Expone las configuraciones de build

## Personalización

El archivo `tailwind.config.js` permite personalizar los estilos y temas de la aplicación.
