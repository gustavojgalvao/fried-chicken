const navMenu = document.getElementById('nav-menu')
navToggle = document.getElementById('nav-toggle')
navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '400px',
    duration: 2000,
    delay: 300,
    //reset: true, // Animations repeat
})

sr.reveal(`.home__data, .about__data`)
sr.reveal(`.home__images`, {delay: 1000})
sr.reveal(`.home__dam-1`, {delay: 1000, scale: 0, rotate: {z: 45}})
sr.reveal(`.home__dam-2, .home__dam-3`, {delay: 1400, scale: 0, rotate: {z: 45}})
sr.reveal(`.home__dam-4`, {delay: 1700, scale: 0, rotate: {z: 45}})
sr.reveal(`.home__dam-5`, {delay: 1800, scale: 0, rotate: {z: 45}})
sr.reveal(`.about__img-1`, {delay: 600, origin: 'right'})
sr.reveal(`.about__img-2`, {delay: 800, origin: 'left'})
sr.reveal(`.about__tooltip-1`, {delay: 1600, origin: 'left'})
sr.reveal(`.about__tooltip-2`, {delay: 1800, origin: 'rigth'})
sr.reveal(`.order__card:nth-child(1)`, {origin: 'rigth'})
sr.reveal(`.order__card:nth-child(2)`, {origin: 'left'})
sr.reveal(`.order__tooltip-1`, {delay: 800, origin: 'rigth'})
sr.reveal(`.order__tooltip-2`, {delay: 800, origin: 'left'})
sr.reveal(`.combo__titles`, {origin: 'bottom'})
sr.reveal(`.combo__img`, {delay: 1000})
sr.reveal(`.combo__data`, {delay: 1600})
sr.reveal(`.combo__numbers`, {delay: 1600, origin: 'bottom'})
sr.reveal(`.contact__data`, {origin: 'right'})
sr.reveal(`.contact__info`, {origin: 'left'})
sr.reveal(`.contact__img-1`, {delay: 1000, distance: 0, scale: 0, rotate: {z: -45}})
sr.reveal(`.contact__img-2`, {delay: 1200, distance: 0, scale: 0, rotate: {z: 45}})