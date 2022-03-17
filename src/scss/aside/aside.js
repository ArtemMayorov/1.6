const openMenu = document.querySelector('.aside-page');
const burgerButton = document.querySelector('.button__burger');
const burgerBack = document.querySelector('.button__back');
const burgerBack2 = document.querySelector('.burger-header__button');
const bodyHidden = document.querySelector('body');
const mainPage = document.querySelector('.main-page');

// console.log(burgerBack)

// burgerBack.addEventListener('click', () => {
//     console.log(burgerBack2)
// })
    burgerButton.addEventListener('click', () =>{
        openMenu.classList.toggle('aside-page--active')
        mainPage.classList.toggle('body--disabled')
    })
    burgerBack2.addEventListener('click', ()=>{
        openMenu.classList.toggle('aside-page--active')
        mainPage.classList.toggle('body--disabled')
    })


    openMenu.addEventListener('click', (ev) => {
        if (ev.target === openMenu) {
            openMenu.classList.toggle('aside-page--active')
        }
        console.log(ev.target)
        

    })
// if (window.innerWidth > 360) {
//     burgerButton.addEventListener('click', () =>{
//         openMenu.classList.toggle('aside-page--active')
//         bodyHidden.classList.toggle('body--disabled')
//     })
// }