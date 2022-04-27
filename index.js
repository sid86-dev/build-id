 function generate(length=7) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

if (require.main === module) {
  for (let l = 1; l < 16; l++){
    console.log(`char = ${l}; ` + generate(l));
  }
}

module.exports = generate