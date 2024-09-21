
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');


let tasks = [];


taskForm.addEventListener('submit', function (e) {
    e.preventDefault();  

    
    const taskTitle = document.getElementById('taskTitle').value;
    const taskCategory = document.getElementById('taskCategory').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    
    if (taskTitle === '' || taskCategory === '' || taskDeadline === '') {
        alert("Please fill in all fields.");
        return;
    }

    
    const task = {
        id: Date.now(),  
        title: taskTitle,
        category: taskCategory,
        deadline: taskDeadline,
        completed: false
    };

   
    tasks.push(task);

    
    displayTasks();

    
    taskForm.reset();
});


function displayTasks() {
    
    taskList.innerHTML = '';

    
    tasks.forEach((task) => {
        
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';  

        
        li.innerHTML = `
            <div>
                <strong>${task.title}</strong>
                <span>(${task.category})</span>
                <span> - Due: ${task.deadline}</span>
            </div>
            <div>
                <button onclick="completeTask(${task.id})">Complete</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

        
        taskList.appendChild(li);
    });
}

function completeTask(id) {

    tasks = tasks.map((task) => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );


    displayTasks();
}

function deleteTask(id) {
    
    tasks = tasks.filter((task) => task.id !== id);


    displayTasks();
}