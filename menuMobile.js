const mobileBtn = document.querySelector('.open-menu');
let menuFechado = true;
const navBar = document.querySelector('.nav-bar');
mobileBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(navBar.getAttribute('class') !== 'nav-bar active')
    {
        navBar.setAttribute('class', 'nav-bar active');
        mobileBtn.innerHTML = `<i class="bx bx-x"></i>`;
    }
    else{
        mobileBtn.innerHTML = `<i class="bx bx-menu"></i>`;
        navBar.setAttribute('class', 'nav-bar');
    }
});
