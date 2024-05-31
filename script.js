// script.js
document.getElementById('add-task-btn').addEventListener('click', function() {
    let taskInput = document.getElementById('new-task');
    let taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        let li = document.createElement('li');
        li.innerText = taskText;
        
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
        
        li.appendChild(deleteBtn);
        document.getElementById('task-list').appendChild(li);
        
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
});

document.getElementById('new-task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('add-task-btn').click();
    }
});
