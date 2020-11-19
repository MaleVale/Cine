const fs = require("fs")
let sucursales = {
sucursales : function(){
   sucursales = JSON.parse(fs.readFileSync("./data/theaters.json","utf-8"))
},
    total : function(){
        return faqs.leerJSON().total_theaters
    },
    sucursales : function(){
        return faqs.leerJSON().theaters
    },
    titulo : `SUCURSALES DISPONIBLES`,
}

module.exports = sucursales