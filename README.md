# DrinksHouse
Tienda virtual de venta de licores


DRINKS HOUSE


Introducción:
Es una página web que tiene como objetivo agilizar y amenizar la experiencia de compra del usuario mantenido un estilo minimalista y limpio enfocado a la venta de bebidas alcohólicas y snacks. 
Para este proyecto se han creado dos componentes DRINKS-HOUSE-SEVER (BACK-END) Y DRINKS-HOUSE (FONT-END).
En el proceso de desarrollo se ha utilizado como controlador de versiones GIT cumpliendo los estándares de GitFlow, el código fuente se ha almacenado en un repositorio público de GITHUB. Y finalmente se ha sido desplegado en un servidor privado de DigitalOcean.

Drinks House Server:
Es un componente monolito de extensión WAR. Este componente fue desarrollado en lenguaje JAVA 11 y utilizando el Framework SPRING-BOOT.Adicionalmente se realizó conexión con una base de datos MySQL provista por Bsale. Tiene como objetivo proveer información requerida para los procesos del portal.
Se desarrollaron y expusieron dos Api Rest (JSON) de consulta:

	1)CONSULTA CATEGORIAS:
	
	URL: http://165.232.142.71/drinks-house-server/api/category
	TIPO PETICION: GET
	OBJETIVO: Listar las categorías de productos disponibles.



	2)CONSULTA PRODUCTO:

	URL: http://165.232.142.71/drinks-house-server/api/product
	TIPO PETICION: POST
	OBJETIVO: Obtener un paginado de productos filtrado por los siguientes criterios

	> Categoría
	> Nombre,
	> Orden solicitado.

Se adjunta postman con los request de las Apis antes mencionadas.
 

Drinks House:
Este portal tiene como objetivo servir de interfaz gráfica para el proceso de compra de productos. Ha sido desarrollado con HTML, CSS Y JS. Se ha hecho uso de la librería JQuery para la codificación. Y para los iconos FontAwesome.
Características generales del portal:

   > Filtro de orden por precio y nombre pensado par agilizar el proceso de compra del usuario
   > Paginado 10,15,20 elementos por página pensado para evitar lentitud en carga de información.
   > Carrito de compra flotante para simular proceso de compra
   > Listado de categorías en Drop Down List
   > Menú de búsqueda adaptado para mejorar la experiencia de búsqueda desde celular
   > Portal responsivo para Ordenadores, Tablets y Celulares
