
let procArgv = require("yargs")(process.argv.slice(2));

let options = {
    alias:{
        _: 'database'
    }
}

let option = {
    default:{
       persistencia: 'mongo'
    }
}

const response = procArgv.alias(options.alias).argv;
const response2 = procArgv.default(option.default).argv
response.database = response._;

let persistencia= "";

if(response.database[0]==undefined){
    persistencia = response2.persistencia
}else{
    persistencia = response.database[0]
}

module.exports = (persistencia)