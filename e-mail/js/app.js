
//CHIEDERE ALL'UTENTE LA SUA MAIL 

const emaiUserlElement = document.getElementById('email')



//COLLEGARE IL BOTTONE 
const submitElementDOM = document.getElementById('button')
submitElementDOM.addEventListener('click', function () {

    const emailUserlElementValue = emaiUserlElement.value
    //STILARE UNA LISTA DI INGRESSO
    const arrayEmailVerificate = ["cruciata9748@gmail.com", "donato.riccio@gmail.com", "samuel.panicucci@gmail.com", "gianluca.lomarco@gmail.com"]

    let checkEmail = false
    //CONTROLLO CHE LA MAIL SIA REGISTRATA
    for (let i = 0; i < arrayEmailVerificate.length; i++) {
        const emailGroup = arrayEmailVerificate[i]

        if (emailUserlElementValue === emailGroup) {
            checkEmail = true
        }
    }


    //STAMPARE L'ESITO DEL CONTROLLO
    if (checkEmail === true) {
        console.log('la tua mail è registrata')
    } else {
        console.log('la tua mail non è registrata')

    }
})




