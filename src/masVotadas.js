const fs = require('fs')
let masVotadas = {
    leerJSON : function(){
        const fs = require("fs");
        return JSON.parse(fs.readFileSync('./data/movies.json','utf-8'));
        let votePromedioSiete = movie.filter((movies)=>{return movies.vote_average >= 7});	  
            peliculasConPromedioSiete = voteSiete.length;
            peliculasConDescipcion = movies.overview;
		
    }
}

module.exports = masVotadas