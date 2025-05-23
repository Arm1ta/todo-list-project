const sidebar = document.querySelector('.sidebar')
const humburgerSvg = document.querySelector('.humburger-svg')
const cancleSvg = document.querySelector('.cancle-svg')

window.addEventListener('resize', () => {
    if (window.innerWidth > 655) {
        sidebar.classList.remove('hidden');
    }
    else {
        sidebar.classList.add('hidden')
    }
    
})

humburgerSvg.addEventListener('click', () => {
    sidebar.style.display = 'flex';
    sidebar.classList.remove('hidden')

})
cancleSvg.addEventListener('click', () => {
        sidebar.classList.add('hidden');

})



