const fs = require('fs');

let homePage = {
    leerJSON : function(){
        const fs = require("fs");
        return JSON.parse(fs.readFileSync('./data/movies.json','utf-8'));
        movies.sort((a, b) => (a.title > b.title)?1:(a.title < b.title)?-1:0);
        return movies
    },
    cantidad : function(){
        return homePage.leerJSON().total_movies;
    },   
    pieDePagina : function(){    
        return 'Recorda que podes visitar las secciones' + '\n\n' + "i - En Cartelera" + '\n\n' + "iii - Sucursales" + '\n\n' +  "v - Preguntas Frecuentes";
       }
    


}
module.exports = homePage;