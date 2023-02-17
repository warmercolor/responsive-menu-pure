class menuMobile {

    static openMenu() {
        const menu        = document.querySelector('#menu')
        const paidoModal  = document.querySelector('.modal')


        menu.addEventListener('click', (event) => {
            if (paidoModal.classList.contains('hidden')) {
                paidoModal.classList.toggle('hidden')
                menu.classList.toggle('menu')
                paidoModal.style.animation = 'showModal'
                paidoModal.style.animationDuration = '2s'
            }
            else {
                paidoModal.style.animation = 'closeModal'
                paidoModal.style.animationDuration = '1s'
                menu.classList.toggle('menu')
                paidoModal.addEventListener('animationend', (event) => {
                    paidoModal.classList.toggle('hidden')
                },
                    {
                        once: true
                    })
            }
        })
    }
}



menuMobile.openMenu()

