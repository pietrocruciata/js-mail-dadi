//GENERARE UN NUMERO CASUALE DA 1 A 6 PER L'UTENTE
const userRoll = document.querySelector('.dadouser')
userRoll.addEventListener('click' , function(){
    const numberUser = []
    const numberComputer = []
        const randomNumbers = Math.floor(Math.random() * 6)+1;
        numberUser.push(randomNumbers)
        document.getElementById('usernumber').innerHTML = randomNumbers

        //GENERARE UN NUMERO CASUALE DA 1 A 6 PER IL COMPUTER
        const randomNumbersComputer = Math.floor(Math.random() * 6)+1;
        numberComputer.push(randomNumbersComputer)
        document.getElementById('computernumber').innerHTML = randomNumbersComputer

    
    console.log('numero user: '+numberUser ,'numero computer: '+ numberComputer );

// STABILIRE IL VINCITORE

if(numberUser > numberComputer){
    console.log('HAI VINTO!');
    document.querySelector('.result').innerHTML = 'HAI VINTO!'

}else if (numberUser < numberComputer){
    console.log('HAI PERSO!');
    document.querySelector('.result').innerHTML = 'HAI PERSO!'

}else{
    console.log('SCONTRO TRA TITANI! RILANCIA!!');
    document.querySelector('.result').innerHTML = ' SCONTRO TRA TITANI! RILANCIA !'

}


})

