let header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop > 1){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
})

