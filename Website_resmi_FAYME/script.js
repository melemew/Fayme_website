// promotion-pictures { home } :
const promotionPictures = document.querySelector("main section.home");
const dataGambarPromosi = ["../Website_resmi_FAYME/img/oda-nobunaga1.jpg", "../Website_resmi_FAYME/img/oda_nobunaga2.jpg", "../Website_resmi_FAYME/img/oda_nobunaga3.jpeg", "../Website_resmi_FAYME/img/oda_nobunaga4.jpeg", "../Website_resmi_FAYME/img/oda_nobunaga5.jpeg", "../Website_resmi_FAYME/img/oda_nobunaga6.jpeg", "../Website_resmi_FAYME/img/oda_nobunaga7.jpeg"];


window.addEventListener('click', (e) => {
    if (e.target.classList.contains('liCI')) {
        const showedIndexGambar = Number(e.target.dataset.id);
        // console.log(showedIndexGambar);

        // alert('hello');

        // indexAwal(showedIndexGambar);
        // langsungAja(showedIndexGambar);
        // setI(showedIndexGambar);
    }
});
indexAwal(0);



// function langsungAja(i) {
//     return promotionPictures.innerHTML = `<img src="${dataGambarPromosi[i]}" alt="">`;
// }




    let i = 1
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
        indexGambar.push(`<li class="liCI" data-id="${i}"></li>`);
    }
    // console.log(indexGambar.length);    
    

    let cetakIndex = '';
    for (let i=0; i < indexGambar.length; i++) {
        if (i == showedIndexGambar) {
            indexGambar[i] = `<li class="warnaHitam-pPictures liCI" data-id="${i}"></li>`
        }
        cetakIndex += indexGambar[i];
    }
    // console.log(cetakIndex);
    

    return arrayPromotionPictures.innerHTML = cetakIndex;
}


function indexAwal(index) {
    const arrayPromotionPictures = document.querySelector('ul.array-gambar-promotion');

    const indexGambar = [];
    for (let i = 0; i < dataGambarPromosi.length; i++) {
        indexGambar.push(`<li class="liCI" data-id="${i}"></li>`);
    }
    // console.log(indexGambar.length);    
    

    let cetakIndex = '';
    for (let i=0; i < indexGambar.length; i++) {
        if (i == index) {
            indexGambar[i] = `<li class="warnaHitam-pPictures liCI" data-id="${i}"></li>`;
            
        }
        cetakIndex += indexGambar[i];
    }
    // console.log(cetakIndex);
    

    return arrayPromotionPictures.innerHTML = cetakIndex;
}





// fitur Contact Us 
const cU = document.querySelector('.cs-wa-js');
const cIg = document.querySelector('.ig-js .cs-ig');
const cFb = document.querySelector('.fb-js .cs-fb');


cU.addEventListener('mouseover', () => {
    cIg.classList.add('h-cs-ig');
    cFb.classList.add('h-cs-fb');

    setTimeout(() => {
        cIg.classList.remove('h-cs-ig');
        cFb.classList.remove('h-cs-fb');
    }, 4000);
});





    //Slide Service

// Declereny 
const slideserv = document.querySelectorAll('.mySlides');
const lanjutser = document.querySelector('.next');
const mundurser = document.querySelector('.prev');
const parentser = document.querySelector('.parentslide');

function buatUi(url) {
    fetch(url)
    .then(response => response.json())
    .then(res => {
        let ui = '';

        res.forEach(({img, caption, isian}) => {
            ui += `<div class="mySlides">
                            <img src="${img}">
                            <h1>${caption}</h1>
                            <div class="text">${isian}</div>
                        </div>`
        })

        document.querySelector('.parentslide').innerHTML = ui;
    })
}
buatUi('data/Keunggulanweb.json');


// Update slide list
    fetch('data/Keunggulanweb.json')
        .then(res => res.json())
        .then(res => {
            let currentIndex = 0;
            const allSlides = parentser.querySelectorAll('.mySlides');

            function updateSlide() {
                const slideWidth = allSlides[0].offsetWidth - 100;
                parentser.style.transform = `translateX(-${currentIndex * (slideWidth*5)}px)`;
            }

            lanjutser.addEventListener('click', () => {
                const slideIndex = res.length / 3;
            
                currentIndex++;
                if (currentIndex >= slideIndex) {
                    currentIndex = 0;
                }
                updateSlide();
                });
            
            mundurser.addEventListener('click', () => {
                const slideIndex2 = res.length - 2;
            
                currentIndex--;
                if (currentIndex < 0) {
                    currentIndex = allSlides.length - slideIndex2;
                }
                updateSlide();
            });

        })