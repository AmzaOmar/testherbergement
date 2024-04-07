const back = ["../img/acceuil.jpg", "../img/acceuil2.jpg", "../img/acceuil3.jpg"];
let index = 0;

let header = document.getElementById("header");

function changeBack() {
    header.style.background = `url(${back[index]})`;
    header.style.backgroundSize='cover';
    header.style.backgroundPosition='center'
    index = (index + 1) % back.length;
}



function affiche (section){
    let court=section.querySelector('.court');
    let complet=section.querySelector('.complet')
    let button=section.querySelector('.button');

    court.classList.toggle('hidden');
    complet.classList.toggle('hidden');
    if (complet.classList.contains('hidden')){
        button.textContent='lire plus'
    }
    else{
        button.textContent='lire moins'
    }
    
}

changeBack();
setInterval(changeBack, 5000);
