import './modules/style.css';

function showToDo(todo) {
  const list = document.querySelector('.list');
  const newlist = document.createElement('li');
  newlist.classList.add('newlist');
  newlist.innerHTML = `
    <input id="${todo.index}" class="check" type="checkbox"/>
    <span class="text">${todo.description}</span>
    <button class="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4zm0 9.6a2.2 2.2 0 1 0 0 4.402 2.2 2.2 0 0 0 0-4.402z"/></svg></button>
    `;
  list.append(newlist);
}

const todoList = [];
let id = 1;
function add(text) {
  const todo = {
    description: text,
    completed: false,
    index: id += 1,
  };
  todoList.push(todo);
  showToDo(todo);
}

const form = document.querySelector('.main');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('.action');
  const text = input.value.trim();
  if (text !== '') {
    add(text);
    input.value = '';
    input.focus();
  }
});

const completed = document.querySelector('.newlist');
completed.addEventListener('click', () => {
  completed.classList.toggle('completed');
});
