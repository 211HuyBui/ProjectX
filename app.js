// DOM Elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

// Add a new task
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value;
    addTask(taskText);
    storeTaskInLocalStorage(taskText);
    taskInput.value = '';
});

// Add task to the UI
function addTask(taskText) {
    const li = document.createElement('li');
    li.className = 'task';
    li.innerHTML = `
        ${taskText} 
        <button class="delete-btn">X</button>
    `;

    // Mark task as completed on click
    li.addEventListener('click', toggleTaskCompleted);

    // Delete task on button click
    li.querySelector('.delete-btn').addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent marking as completed
        deleteTask(e.target.parentElement);
    });

    taskList.appendChild(li);
}

// Load tasks from localStorage on page load
function loadTasks() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => addTask(task));
}

// Toggle completed task
function toggleTaskCompleted() {
    this.classList.toggle('completed');
}

// Delete task from UI and localStorage
function deleteTask(taskItem) {
    taskItem.remove();
    removeTaskFromLocalStorage(taskItem.textContent.trim());
}

// Store task in localStorage
function storeTaskInLocalStorage(task) {
    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from localStorage
function getTasksFromLocalStorage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}

// Remove task from localStorage
function removeTaskFromLocalStorage(taskText) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
