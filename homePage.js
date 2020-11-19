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
    


}
module.exports = homePage;