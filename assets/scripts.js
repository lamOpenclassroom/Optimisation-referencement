const arrayListe = ["Portrait", "Mariages", "Entreprises", "Concert", "Tous"];
const getContainer = document.querySelector(".container");
const galleryImage = [...document.getElementsByClassName("item-colomn")];
const images = document.querySelectorAll(".item-colomn img");
const myModal = document.querySelector(".mymodal");
const imagecarousel = document.querySelector(".imagecarousel");
const contentModal = document.querySelector(".mymodal-content");

    
for (item of arrayListe) {
    getContainer.insertAdjacentHTML("afterbegin", `<nav>
    <ul class="my-4 tags-bar nav nav-pills">       
    </ul>
    </nav>`)
}
const myUl = document.querySelector(".my-4")
for (item of arrayListe) {
    myUl.insertAdjacentHTML("afterbegin", `<li class="nav-item nav-link ${item}">${item}</li>`)
}
const buttons = document.querySelectorAll('.nav-item') 
const buttonTous = document.querySelector(".Tous")
const buttonConcert = document.querySelector(".Concert")
const buttonEntreprises = document.querySelector(".Entreprises")
const buttonMariages = document.querySelector(".Mariages")
const buttonPortrait = document.querySelector(".Portrait")

function imageAll() {
    for (item of galleryImage) {
        if (item.classList.contains("All")) {
            item.classList.add("visible");
        } else {
            item.classList.remove("visible")
            buttonTous.classList.remove("active")
        }
    }
}

function imageConcert() {
    for (item of galleryImage) {
        if (item.classList.contains("Concert")) {
            item.classList.add("visible");
        } else {
            item.classList.remove("visible");
        }
    }
}

function imageEntreprise() {
    for (item of galleryImage) {
        if (item.classList.contains("Entreprises")) {
            item.classList.add("visible");
        } else {
            item.classList.remove("visible")
        }
    }
}

function imageMariages() {
    for (item of galleryImage) {
        if (item.classList.contains("Mariages")) {
            item.classList.add("visible");
        } else {
            item.classList.remove("visible")
        }
    }
}

function imagePortrait() {
    for (item of galleryImage) {
        if (item.classList.contains("Portrait")) {
            item.classList.add("visible");
        } else {
            item.classList.remove("visible")
        }
    }
    
}



function displayGallery() {
    buttonTous.classList.add("active")
    for (item of galleryImage) {
        item.classList.add("visible")
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            const valueLi = e.target;
            const navList = valueLi.classList;
            navList.contains("Tous") ? imageAll() & buttonTous.classList.add("active") : buttonTous.classList.remove("active");
            navList.contains("Entreprises") ? imageEntreprise() & buttonEntreprises.classList.add("active") : buttonEntreprises.classList.remove("active");
            navList.contains("Concert") ? imageConcert() & buttonConcert.classList.add("active") : buttonConcert.classList.remove("active");
            navList.contains("Mariages") ? imageMariages() & buttonMariages.classList.add("active") : buttonMariages.classList.remove("active");
            navList.contains("Portrait") ? imagePortrait() & buttonPortrait.classList.add("active") : buttonPortrait.classList.remove("active")
        })
    }
}
displayGallery()



function modalImages() {
    //Ouverture de la modale
    for (data of galleryImage) {
        data.addEventListener("click", () => {
            myModal.classList.remove("blockmodal");
            sliderModal();
            slideLeftRight();  
        })
    }

    myModal.addEventListener("click", () => {
        myModal.classList.add("blockmodal");
        for (data of carrousel){
            data.classList.contains("myactive") ? data.classList.remove("myactive") : null;
        }
    });

    myModal.children[0].addEventListener("click", (e) => {
        e.stopPropagation();
    })              
}
modalImages()

let carrousel = 0;

function sliderModal() {
    let titleButton = 0;

    for (items of buttons) {
        items.classList.contains("active") ? titleButton = items.classList[2] : null;
    }
       
    if (titleButton == "Concert") {
        carrousel = document.querySelectorAll(".moncarousel.Concert.visible");
        console.log(titleButton);
    }else if (titleButton == "Entreprises") {
        carrousel = document.querySelectorAll(".moncarousel.Entreprises.visible");
        console.log(titleButton)
    }else if (titleButton == "Mariages") {
        carrousel = document.querySelectorAll(".moncarousel.Mariages.visible");
        console.log(titleButton)
    }else if (titleButton == "Portrait") {
        carrousel = document.querySelectorAll(".moncarousel.Portrait.visible");
        console.log(titleButton)
    } else {
        carrousel = document.querySelectorAll(".moncarousel")
        console.log(titleButton)
    }
}

function slideLeftRight() {
    let nbrslide = carrousel.length;
    let count = 0;
    const prev = document.querySelector(".left-arrow");
    const next = document.querySelector(".rigth-arrow")
   
    carrousel[count].classList.add("myactive");

    function arrowright() {
        carrousel[count].classList.remove("myactive");
        if (count < nbrslide - 1) {
            count++;
        } else {
            count = 0;
        }
        carrousel[count].classList.add("myactive");
        console.log(`"My count is:"${count}`)
    }
    next.addEventListener("click", arrowright);

    function arrowleft() {
        carrousel[count].classList.remove("myactive")
        if (count > 0) {
            count--;
        } else {
            count = nbrslide - 1;
        }
        carrousel[count].classList.add("myactive");
        console.log(`"My count is:"${count}`)
    }
    prev.addEventListener("click", arrowleft);
    count = 0;
}


















