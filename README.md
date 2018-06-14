# Prueba almundo

## Configuracion

### 1)  clonar el proyecto rama master 

```git
     git clone (repo) https://github.com/alexismr/almundotest.git
```
### 2)  backend

```node 
    ubicarse en el repositorio  almundotest\backend-server
    ejecutar el comando npm install
    ejecutar el comando npm start  
```
### 3)  frontend
```script 
    ubicarse en el repositorio  almundotest\front-Angular
    ejecutar el comando npm install
    ejecutar el comando npm start 
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
- **src**
		- **wwwroot** _carpeta donde quedan los recursos para desplegar_
		- **angularApp** _logica Angular_
			- **main.ts** _configuracion compilacion JiT_
			- **main-aot.ts** _ configuracion compilacion  AoT_	
		- **config** _configuracion de entornos_
			- **webpack.dev.js** _compilacion entorno desarrollo_
			- **webpack.prod.js** _compilacion entorno produccion_
		- **webpack.config.js** _configuracion inicio webpack_
  
## Node soporte  con typescript
