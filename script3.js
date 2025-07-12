// query buat ke halaman template
const template = document.querySelector('.template');
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('templateW')) {
        const idny = new URLSearchParams({ template: 'website' }).toString();
        window.location.href = `index2.html?${idny}`;
        e.preventDefault();
    }

    if (e.target.classList.contains('templateA')) {
        const idny = new URLSearchParams({ template: 'aplikasi' }).toString();
        window.location.href = `index2.html?${idny}`;
        e.preventDefault();
    }
})

// ambil data dari query di halaman index
const urlParams = new URLSearchParams(window.location.search);
const tempId = urlParams.get("template");

if (tempId === 'website') {
    buatUiTW();
} else {
    buatUiTA();
}


function ambilDataT(url) {
    return fetch(url)
        .then(res => res.json())
        .then(res => res);
}



async function buatUiTW() {
    const portofolio = await ambilDataT('data/Testimoni.json');
    const landingPage = await ambilDataT('data/promotionPictures.json');
    const blog = await ambilDataT('data/Testimoni.json');

    console.log(portofolio);
    console.log(landingPage);
    console.log(blog);
}