
const midPic = document.querySelector('.mid-img-main')
const addTask = document.querySelector('.addtask-main')
const boxTodo = document.querySelector('.text-todo-list')


let clickBox = false;
addTask.addEventListener('click', () => {
    midPic.style.display = 'none'
    if (!clickBox) {
        boxTodo.style.display = 'block';
        midPic.style.display = 'none'
        clickBox = true;
    }
    else {
        boxTodo.style.display = 'none'
        midPic.style.display = 'flex'
        clickBox = false
    }
})





const tag = document.querySelector('.tag')
const boxDegree = document.querySelector('.box-degree')
const tagSvg = document.querySelector('.tag-svg')


let clickTag = false 
tag.addEventListener('click', () => {
    if (!clickTag) {
        boxDegree.style.display = 'flex';
        tagSvg.style.rotate = '90deg';
        clickTag = true;
    }
    else {
        boxDegree.style.display = 'none';
        tagSvg.style.rotate = '0deg' 
        clickTag = false;
    }

})


const tagsDegree = document.querySelectorAll('.tagsDegree')
const rate = document.querySelector('.rate')
const selectTag = document.querySelector('.selectTag')

let whichTag = '';
let clickDegree = false;
tagsDegree.forEach((tag) => {
    tag.addEventListener('click', () => {
        whichTag = tag;
        console.log(whichTag.textContent);

        
        rate.style.display = 'none'; 
        selectTag.innerHTML = `
                <div class="${tag.className} close-btn">
                    <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66406 13.3334L13.3307 6.66675" stroke="#323233" stroke-width="0.999925" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.3307 13.3334L6.66406 6.66675" stroke="#323233" stroke-width="0.999925" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>${tag.textContent}</div>
                    
                </div>
            `
        console.log(selectTag);
        const closeBtn = document.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
        selectTag.innerHTML = '';
        rate.style.display = 'block';
    })

        
        
            
    })
})


