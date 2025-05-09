const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const enableDate = document.getElementById('enable-date');
const taskDate = document.getElementById('task-date');

enableDate.addEventListener('change', function () {
  taskDate.style.display = this.checked ? 'inline-block' : 'none';
});

addBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  if (enableDate.checked && taskDate.value) {
    const dateSpan = document.createElement('span');
    dateSpan.textContent = ` (Due: ${taskDate.value})`;
    dateSpan.style.marginLeft = '10px';
    dateSpan.style.color = 'black';
    li.appendChild(dateSpan);
  }

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
  taskDate.value = '';
  enableDate.checked = false;
  taskDate.style.display = 'none';
});
