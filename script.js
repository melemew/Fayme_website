// promotion-pictures { home } :
const promotionPictures = document.querySelector("main section.home");
let stopInterval;



ambilData(0, 'Data/promotionPictures.json');
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

        ambilData(showedIndexGambar, 'Data/promotionPictures.json');
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
    const slideN = document.querySelector('.next');
    const slideP = document.querySelector('.prev');

    fetch(url)
    .then(response => response.json())
    .then(res => {
        let ui = '';

        if (res.length === 3) {
            slideN.remove();
            slideP.remove();
        }

        res.forEach(({img, caption, isian, kelas}) => {
            ui += `<div class="mySlides">
                        <div class="img-layanan ${kelas}">
                            <img src="${img}">
                        </div>
                        <h3>${caption}</h3>
                        <p class="text-layanan">${isian}</p>
                    </div>`
        })

        document.querySelector('.parentslide').innerHTML = ui;
    })
}
buatUi('Data/Keunggulanweb.json');


// Update slide list
    fetch('Data/Keunggulanweb.json')
    .then(res => res.json())
    .then(res => {
        let currentIndex = 0;
        let slidesToShow = 3;
        let intervalId;

        const slides = parentser.querySelectorAll('.mySlides');

        // Fungsi untuk menentukan berapa slide tampil berdasarkan lebar layar
        function updateSlidesToShow() {
            if (window.innerWidth < 768) {
                slidesToShow = 1;
            } else if (window.innerWidth < 1024) {
                slidesToShow = 2;
            } else {
                slidesToShow = 3;
            }

            // Update flex basis setiap slide
            slides.forEach(slide => {
                slide.style.flex = `0 0 ${100 / slidesToShow}%`;
                slide.style.maxWidth = `${100 / slidesToShow}%`;
            });

            updateSlide();
        }

        function updateSlide() {
            const slideWidth = slides[0].offsetWidth + 20; // gap 20
            parentser.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        function nextSlide() {
            const maxIndex = slides.length - slidesToShow;
            currentIndex++;
            if (currentIndex > maxIndex) {
                currentIndex = 0;
            }
            updateSlide();
        }

        function prevSlide() {
            const maxIndex = slides.length - slidesToShow;
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = maxIndex;
            }
            updateSlide();
        }

        // Event tombol next & prev
        lanjutser.addEventListener('click', () => {
            nextSlide();
            resetAutoSlide();
        });

        mundurser.addEventListener('click', () => {
            prevSlide();
            resetAutoSlide();
        });

        // Auto slide
        function startAutoSlide() {
            intervalId = setInterval(() => {
                nextSlide();
            }, 5000); // ganti setiap 5 detik
        }

        function resetAutoSlide() {
            clearInterval(intervalId);
            startAutoSlide();
        }

        // Jalankan pertama kali
        updateSlidesToShow();
        startAutoSlide();

        // Update responsive saat resize
        window.addEventListener('resize', () => {
            updateSlidesToShow();
        });
    });
