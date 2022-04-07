# Library / Biblioteca 


(Library / Biblioteca)  es un API Rest sobre libros, la cual implementa Sequelize como ORM, PostgreSQL como Base De Datos.


## Requisitos
 - Docker
 - NodeJS

# Corrida
Primero instalar las dependencias
```bash
  npm i
```
Configurar el entorno para DB utilizando Docker
```bash
docker-compose up
```

Para la ejecución de Migrations y Seeders en otra terminal ejecutar este comando
```bash
npm run down && npm run down && npm run migrate && npm run seed
```

Luego inicar el servicio del API Rest
```bash
npm run dev
```


## Rutas
  - /book
  - /book/:id
  - /book/:id/page
  - /book/:id/page/:pageIndex
  - /book/:id/page/:pageIndex/:formato
> Note: Actualmente solo cuenta con el formato html "eje:('.../:pageIndex/html')".

## Verificar
Para verificar el serivico puede ingresar a su navegador con esta ruta. 
```sh
http://localhost:8080/book
```
> Note: El API no cuenta con el endpoint(ruta) para registrar nuevos libros, pero esta abierta a en otras versiones integrar ese feature.



- [Instrucciones en Español](README_ES.md)
- [Instructions in English](README_EN.md)
