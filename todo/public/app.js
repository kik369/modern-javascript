const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
  const html = `
    <li class="flex flex-row p-3 mb-1 rounded bg-blue-900">
            <span class="flex-grow">${todo}</span>
            <span class="inline-block align-baseline">
              <i class="fas fa-trash-alt"></i>
            </span>
          </li>
    `;
  list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

list.addEventListener('click', e => {
  if (e.target.classList.contains('fa-trash-alt')) {
    e.target.parentElement.parentElement.remove();
  }
});

const filterToDos = term => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('hidden'));

  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('hidden'));
};

search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterToDos(term);
});
