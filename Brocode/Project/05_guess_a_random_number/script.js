//guess the random number
let minnum=1;
let maxnun=100;
let random= Math.floor(Math.random()*(maxnun-minnum+1)) +minnum;
let attempts=0
let guess
let running =true
while(running==true){
    guess=window.prompt(`Guess a Number Between ${minnum} - ${maxnun}`)
    guess=Number(guess)
    if(isNaN(guess)){
        window.alert("Plese enter a valid number.")
    }
    else if(guess<minnum || guess>maxnun){
        window.alert("Plese enter a valid number.")
    }
    else{
        attempts++;
        if(guess< random){
            window.alert(`Too Low! Try Again :(`)
        }
        else if(guess>random){
            window.alert(`Too More! Try Again :(`)
        }
        else{
            window.alert(`Correct! The answer was ${guess}.It Took You ${attempts} attempts :)`)
            running=false
        }
    }
}