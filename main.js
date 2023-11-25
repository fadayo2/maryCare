let home = document.getElementById("Homeimage")

home.onclick = ()=>{
    window.location.href = "index.html"
}

// let div = document.getElementById("no2")
let anime = document.getElementById("anime")
let anime2 = document.getElementById("anime2")
let anime3 = document.getElementById("anime3")
let no = document.getElementById("no5")
let no1 = document.getElementById("no6")
let no2 = document.getElementById("no8")
let anime4 = document.getElementById("anime4")
let anime5 = document.getElementById("anime5")
let anime6 = document.getElementById("anime6")
let anime7 = document.getElementById("anime7")

window.onscroll = () => {
    const trigger = window.innerHeight / 5 * 4
    const boxTop = anime.getBoundingClientRect().top;

    if(boxTop < trigger) {
        anime.classList.add('show')
    } 
    else {
        anime.classList.remove('show')
    };

    const trigger2 = window.innerHeight / 5 * 4
    const boxTop2 = anime2.getBoundingClientRect().top;

    if(boxTop2 < trigger2) {
        anime2.classList.add('show')
    } 
    else {
        anime2.classList.remove('show')
    };


    const trigger3 = window.innerHeight / 5 * 4
    const boxTop3 = anime3.getBoundingClientRect().top;

    if(boxTop3 < trigger3) {
        anime3.classList.add('show')
    } 
    else {
        anime3.classList.remove('show')
    }

    const trigger4 = window.innerHeight / 5 * 4
    const boxTop4 = no.getBoundingClientRect().top;

    if(boxTop4 < trigger4) {
        no.classList.add('show')
    } 
    else {
        no.classList.remove('show')
    }

    const trigger5 = window.innerHeight / 5 * 4
    const boxTop5 = no.getBoundingClientRect().top;

    if(boxTop5 < trigger5) {
        anime4.classList.add('show')
    } 
    else {
        anime4.classList.remove('show')
    }

    const trigger6 = window.innerHeight / 5 * 4
    const boxTop6 = no1.getBoundingClientRect().top;

    if(boxTop6 < trigger6) {
        no1.classList.add('show')
    } 
    else {
        no1.classList.remove('show')
    }

    const trigger7 = window.innerHeight / 5 * 4
    const boxTop7 = anime5.getBoundingClientRect().top;

    if(boxTop7 < trigger7) {
        anime5.classList.add('show')
    } 
    else {
        anime5.classList.remove('show')
    }

    const trigger8 = window.innerHeight / 5 * 4
    const boxTop8 = anime6.getBoundingClientRect().top;

    if(boxTop8 < trigger8) {
        anime6.classList.add('show')
    } 
    else {
        anime6.classList.remove('show')
    }

    const trigger9 = window.innerHeight / 5 * 4
    const boxTop9 = anime7.getBoundingClientRect().top;

    if(boxTop9 < trigger9) {
        anime7.classList.add('show')
    } 
    else {
        anime7.classList.remove('show')
    }


    const trigger10 = window.innerHeight / 5 * 4
    const boxTop10 = no2.getBoundingClientRect().top;

    if(boxTop10 < trigger10) {
        no2.classList.add('show')
    } 
    else {
        no2.classList.remove('show')
    }
}

