const url = 'https://jsonplaceholder.typicode.com/todos';
fetch(url)
    .then(response => response.json())
    .then(item => {
        const ul = document.createElement('ul');
        ul.setAttribute('id', 'table');
        document.body.appendChild(ul);
        for (let i = 0; i < item.length; i++) {
            let li = document.createElement('li');
            li.innerText = item[i].title;
            ul.appendChild(li);
        }
        document.getElementById('table').addEventListener('click', function (event) {
            let target = event.target;
            if (target.tagName === 'LI') {
                target.remove();
            }
        })
    })
let button = document.createElement('button');
let input = document.createElement('input');
button.innerText = 'Add string';
document.body.insertAdjacentElement("afterbegin", button);
document.body.insertAdjacentElement("afterbegin", input);
button.addEventListener('click', function (event) {
    if (input.value != '') {
        let li = document.createElement('li');
        li.innerText = input.value;
        document.getElementById('table').insertAdjacentElement('beforeend', li);
        input.value = '';
    } else {
        alert('Nothing entered');
    }
})