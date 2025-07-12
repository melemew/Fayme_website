// clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}
    
window.addEventListener('scroll', reveal);
    
function reveal(){  
    var reveals = document.querySelectorAll('.reveal');
    
    for(var i = 0; i < reveals.length; i++){
    
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
    
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}



// coming soon 1 
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('comingSoon')) {
        alert('Mohon maaf Jasa Custom Website dan App sedang tidak tersedia untuk saat ini 🙏');
        e.preventDefault();
    }

    if (e.target.classList.contains('comingSoon2')) {
        alert('Mohon maaf untuk halaman App development sedang tidak tersedia untuk saat ini 🙏');
        e.preventDefault();
    }
})