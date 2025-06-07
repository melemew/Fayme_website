let slideIndex = 1;
let timeout;
showSlides(slideIndex);

// Next/previous controls { about }
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    clearTimeout(timeout);
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    timeout = setTimeout(() => {
        showSlides(++slideIndex)
    }, 10000);
}




// promotion-pictures { home } :
const promotionPictures = document.querySelector("main section.home");
const dataGambarPromosi = ["../Website_resmi_FAYME/img/oda-nobunaga1.jpg", "../Website_resmi_FAYME/img/oda_nobunaga2.jpg", "../Website_resmi_FAYME/img/oda_nobunaga3.jpeg", "../Website_resmi_FAYME/img/oda_nobunaga4.jpeg", "../Website_resmi_FAYME/img/oda_nobunaga5.jpeg", "../Website_resmi_FAYME/img/oda_nobunaga6.jpeg", "../Website_resmi_FAYME/img/oda_nobunaga7.jpeg"];
indexAwal(0);


let i = 1;
setInterval( () => {
    if(i == dataGambarPromosi.length) i = 0;
    
    promotionPictures.innerHTML = `<img src="${dataGambarPromosi[i]}" alt="">`;
    buatIndexGambar(i);
    i++;
}, 9000)




// index promotion-pictures
const arrayPromotionPictures = document.querySelector('ul.array-gambar-promotion');

const buatIndexGambar = (showedIndexGambar) => {
    
    const indexGambar = [];
    for (let i = 0; i < dataGambarPromosi.length; i++) {
        indexGambar.push('<li></li>');
    }
    console.log(indexGambar.length);    
    

    let cetakIndex = '';
    for (let i=0; i < indexGambar.length; i++) {
        if (i == showedIndexGambar) {
            indexGambar[i] = `<li class="warnaHitam-pPictures"></li>`
        }
        cetakIndex += indexGambar[i];
    }
    console.log(cetakIndex);
    

    return arrayPromotionPictures.innerHTML = cetakIndex;
}


function indexAwal(index) {
    const arrayPromotionPictures = document.querySelector('ul.array-gambar-promotion');

    const indexGambar = [];
    for (let i = 0; i < dataGambarPromosi.length; i++) {
        indexGambar.push('<li></li>');
    }
    console.log(indexGambar.length);    
    

    let cetakIndex = '';
    for (let i=0; i < indexGambar.length; i++) {
        if (i == index) {
            indexGambar[i] = `<li class="warnaHitam-pPictures"></li>`
        }
        cetakIndex += indexGambar[i];
    }
    console.log(cetakIndex);
    

    return arrayPromotionPictures.innerHTML = cetakIndex;
}




