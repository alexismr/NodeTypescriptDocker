# Prueba almundo

## Configuracion

### 1)  clonar el proyecto rama master 

```git
     git clone (repo) https://github.com/alexismr/almundotest.git
```
### 2)  backend

```sh
    ubicarse en el repositorio  almundotest\backend-server
    ejecutar el comando npm run  install
    ejecutar el comando npm  run start  
```
### 3)  frontend
```sh
    ubicarse en el repositorio  almundotest\front-Angular
    ejecutar el comando npm run  install
    ejecutar el comando npm  run start 
    la aplicacion se ejecutara  en http://localhost:8080/
```
## estructura front
- Angular [AoT compilation](https://angular.io/guide/aot-compiler)
- Angular [Lazy-loading modules with the router](https://angular.io/guide/ngmodule#lazy-loading-modules-with-the-router)
- Webpack  [Hot Module Replacement DevServer](https://webpack.js.org/configuration/dev-server/)
- compilacion Desarrollo y produccion ( carpeta config)
- SASS, CSS
- NPM script 
## Comandos NPM Script
```
"start"
"webpack-dev": "webpack --env=dev",
"webpack-production": "webpack --env=prod",
"build-dev": "npm run webpack-dev",
"build-production": "npm run webpack-production",
"watch-webpack-dev": "webpack --env=dev --watch --color",
"test": "karma start",
"lint": "tslint ./angularApp"
```
## Estructura Front
```
- src
		- wwwroot _carpeta donde quedan los recursos para desplegar_
		- angularApp _logica Angular_
			- main.ts _configuracion compilacion JiT_
			- main-aot.ts _ configuracion compilacion  AoT_	
		- config _configuracion de entornos_
			- webpack.dev.js _compilacion entorno desarrollo_
			- webpack.prod.js _compilacion entorno produccion_
		- webpack.config.js _configuracion inicio webpack_		
```
##  CRUD 
GET
```sh
 http://localhost:5000/hotel
```
PUT
```sh
http://localhost:5000/hotel/132936
Body:
  [ {
      "id": "161901", "name": " test hotels","stars": 3,"price": 1267.57,"image": "6623490_6_b.jpg",
      "amenities": [
        "nightclub",
        "business-center",
        "bathtub",
        "newspaper",
        "restaurant"
      ]
    }]
```
POST
```sh
http://localhost:5000/hotel
Body:
[
    {
      "id": "2","name": "hotel  test", "stars": 3,"price": 994.18,"image": "4900059_30_b.jpg",
      "amenities": [
        "safety-box",
        "nightclub",
        "deep-soaking-bathtub",
        "beach",
        "business-center"
      ]
    }
 ]
```
DELETE
```sh
http://localhost:5000/hotel/249942
```

