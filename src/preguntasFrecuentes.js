const fs = require('fs')


module.exports = {
    leerJSON:function(){
        const fs = require("fs");
    return JSON.parse(fs.readFileSync('./data/faqs.json','utf-8'));
}
        }
        