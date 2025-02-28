
var capitalStr = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

var num = 12345678910;

var specialChar = `!@#$%^&*`;

var match = capitalStr  + num + specialChar;

var final = ``;

for(let i = 0; i <= 10; i++){
    final += (match[Math.floor(Math.random() * match.length)]);
}

document.write(`<h1> PASSWORD GENERATOR:</h1>` + `<br> <h2> 1.  ${final} </h2>` );