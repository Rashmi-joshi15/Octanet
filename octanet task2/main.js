function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const taskList = document.getElementById('task-list');

        const li = document.createElement('li');

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskText;

        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'edit-input';

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            editTask(li);
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deleteTask(li);
        };

        li.appendChild(span);
        li.appendChild(editInput);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function editTask(li) {
    const span = li.querySelector('.task-text');
    const editInput = li.querySelector('.edit-input');
    const editButton = li.querySelector('button:nth-of-type(1)');

    if (editButton.textContent === 'Edit') {
        editInput.value = span.textContent;
        span.style.display = 'none';
        editInput.style.display = 'inline';
        editButton.textContent = 'Save';
    } else {
        span.textContent = editInput.value;
        span.style.display = 'inline';
        editInput.style.display = 'none';
        editButton.textContent = 'Edit';
    }
}

function deleteTask(li) {
    li.remove();
}
