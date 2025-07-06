// promotion-pictures { home } :
const promotionPictures = document.querySelector("main section.home");
 let stopInterval;



ambilData(0, 'https://raw.githubusercontent.com/melemew/Fayme_website/refs/heads/main/Website_resmi_FAYME/Data/promotionPictures.json');
function ambilData(i, url) {
    fetch(url)
        .then(res => res.json())
        .then(res => {

             indexAwal(i, res);
             mulaiP(i, res)

        })
}


function mulaiP(i, dataGambarPromosi) {

    promotionPictures.innerHTML = `<img src="${dataGambarPromosi[i]}" alt="">`;
    buatIndexGambar(i, dataGambarPromosi);
    let o = i
    stopInterval = setInterval( () => {
        if(o == dataGambarPromosi.length - 1) {
            o = 0;
            promotionPictures.innerHTML = `<img src="${dataGambarPromosi[o]}" alt="">`;
            buatIndexGambar(o, dataGambarPromosi);
        } else if (i == 0) {
            o++
            promotionPictures.innerHTML = `<img src="${dataGambarPromosi[o]}" alt="">`;
            buatIndexGambar(o, dataGambarPromosi);
        } else {
            o++;
            promotionPictures.innerHTML = `<img src="${dataGambarPromosi[o]}" alt="">`;
            buatIndexGambar(o, dataGambarPromosi);
        }      
        
    }, 9000)

}
    



    window.addEventListener('click', (e) => {
    if (e.target.classList.contains('liCI')) {
        const showedIndexGambar = Number(e.target.dataset.id);

        ambilData(showedIndexGambar, 'https://raw.githubusercontent.com/melemew/Fayme_website/refs/heads/main/Website_resmi_FAYME/Data/promotionPictures.json');
        clearInterval(stopInterval);
    }
});


// index promotion-pictures
const arrayPromotionPictures = document.querySelector('ul.array-gambar-promotion');

const buatIndexGambar = (showedIndexGambar, dataGambarPromosi) => {
    
    const indexGambar = [];
    for (let i = 0; i < dataGambarPromosi.length; i++) {
        indexGambar.push(`<li class="liCI" data-id="${i}"></li>`);
    }
    

    let cetakIndex = '';
    for (let i=0; i < indexGambar.length; i++) {
        if (i == showedIndexGambar) {
            indexGambar[i] = `<li class="warnaHitam-pPictures liCI" data-id="${i}"></li>`
        }
        cetakIndex += indexGambar[i];
    }

    return arrayPromotionPictures.innerHTML = cetakIndex;
}


function indexAwal(index, dataGambarPromosi) {
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
buatUi('https://raw.githubusercontent.com/melemew/Fayme_website/refs/heads/main/Website_resmi_FAYME/Data/Keunggulanweb.json');


// Update slide list
    fetch('https://raw.githubusercontent.com/melemew/Fayme_website/refs/heads/main/Website_resmi_FAYME/Data/Keunggulanweb.json')
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
