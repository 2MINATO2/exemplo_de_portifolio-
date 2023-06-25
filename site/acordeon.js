var abri = document.querySelectorAll(".acordeon .trigger")

abri.forEach((trigger) => {
   trigger.addEventListener("click", () =>{

    var parnt = trigger.parentElement
    var coteudo = parnt.classList.contains('open')

    if(coteudo){
        parnt.classList.remove('open')
    }else{
        parnt.classList.add('open')
    }
    
})
});



