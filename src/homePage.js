const fs = require('fs');
let pieDePagina = 'Recorda que podes visitar las secciones i_En Cartelera  iii_Sucursales v_Preguntas Frecuentes'

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
        return pieDePagina;
       }
    


}
module.exports = homePage;