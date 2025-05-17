const number = 657;

let digit = 0;


let i = number;
while(true){
    i = Math.floor(i/10);
    digit++;
    if(i == 0){
        break;
    }
}


console.log(digit)