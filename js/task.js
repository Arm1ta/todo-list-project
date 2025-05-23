
const numberTask = document.querySelector('.number-task');


function renderList() {
    let toDoHTML = '';
    let sum = 0;
    data.forEach((item,index) => {
        let colorClass = item.level;
        if (colorClass === 'بالا') colorClass = 'green';
        else if (colorClass === 'متوسط') colorClass = 'orange';
        else if (colorClass === 'پایین') colorClass = 'red';
         toDoHTML += `
           <div class="boxtask-bottom">
            <div class="color-box ${colorClass}"></div>
            <div class="text-box" >
               <div class='check-box' data-index-task = "${index}"></div>
                <div class='title-and-des'>
                    <div>${item.title}</div>
                    <div>${item.description}</div>
                </div>

            </div>
            <div class="recycleBin-svg" data-index-task = "${index}">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    
            </div>
            
            
        </div>
    
    
        `
        sum += 1;
        
    }) 
    doTask.innerHTML = toDoHTML;
    numberTask.innerHTML = sum;
    
}



const doTask = document.querySelector('.doTask');
const titleInput = document.querySelector('.title-input');
const desInput = document.querySelector('.des-input');
const btnAddTodoList = document.querySelector('.btn-add-todo-list');


let moveTask;
const Checkbox = document.querySelectorAll('.check-box');
const recycleBinSvg = document.querySelectorAll('.recycleBin-svg')

doTask.addEventListener('click', (e) => {
    if (e.target.matches('.check-box')) {
        const indexTask = e.target.dataset.indexTask;
        moveTask = data.splice(indexTask, 1);
        doneTask.push(moveTask[0]);
        console.log(moveTask);
        renderList();
        renderDoneList();
    }
    if (e.target.closest('.recycleBin-svg')) {
        const indexTask = e.target.dataset.indexTask;
        data.splice(indexTask, 1)
        renderList();        
    }

    
})






btnAddTodoList.addEventListener('click', () => {
    if (desInput.value === '' && titleInput.value === '') alert('تایتل و توضیحاتش نباید خالی باشه')
    else {
        data.push({
            title: titleInput.value,
            description: desInput.value,
            level: whichTag.textContent,


        });
    };

    renderList();
    console.log(data);
    

    titleInput.value = '';
    desInput.value = '';
    rate.style.display = 'block';
    boxDegree.style.display = 'none';
    tagSvg.style.rotate = '0deg' 
    selectTag.innerHTML = '';    
})


