const inputBox = document.getElementById('input-box')
const list = document.getElementById('list')

const addTask = () => {
    if(inputBox.value === '') {
        alert('Вы должны что нибудь написать')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        list.append(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData();
}

list.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    }

    if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

const saveData = () => {
    localStorage.setItem('data', list.innerHTML)
}

const showTask = () => {
    list.innerHTML = localStorage.getItem('data')
}

showTask()