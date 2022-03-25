const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome! What is your password?", function(input){
	
	let password = [0,1,2,3,4,5,6,7,8,9]




            if (password === password.length){
                console.log(`success`);
            }else if (password !== password.length){
                console.log(`failure`)
            }
    
    

    reader.close()

})