Uso de google maps en react con el paquete https://tomchentw.github.io/react-google-maps/#infowindow

"/"  --> Marker with label
"/drawing" --> Map with drawing tool
"/circle" --> Map with a circle drawed
"/routes" --> Map with a route drawed
"/polygon" --> Map with a polygon drawed
"/overlay" --> Map with a modal and a button to interact inside of a map
"/infobox" --> Map with a infobox showing a message (no interaction)

En estas rutas se puede observar diferentes ejemplos, en el caso de la herramienta de dibujo se puede tambien obtener las coordenadas, centro, radio, path etc... 

Con los datos que se obtienen de dichos ejemplos se puede pintar posteriormente en el mapa a partir de ellos... esto es lo que requerimos para las geocercas...

# Description
This small project works as a test to show some google maps API functionalities through react components thanks to the library 

https://tomchentw.github.io/react-google-maps/


## How to install

Remember to change your envexample and nowexample files to .env and now.json, inside those files you need to put a google maps key to work correctly with their API...

This repository have a now file so, if you have configured and installed NOW cli you can only run 

´´´shell
npm install && now
´´´

If you don't have now but you have nvm then you can do:

´´´shell
nvm install && nvm use && npm start
´´´

And if you're still on a cave and you don't have nothing?, well... in that case I will recommend you to install any of the previous one or install node on at least 10.12 version to be able to run npm install and after that npm start

### How it works? 

Once it is deployed you should get into the home view, in that home view you can see the index with all the components that are available in this demo...

Thanks! =)