document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('maintenance-form');
    const taskList = document.getElementById('task-list');

    // Load saved tasks from localStorage when the page is loaded
    showTasks();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const taskInput = document.getElementById('task');
        const dateInput = document.getElementById('date');

        const task = taskInput.value;
        const date = dateInput.value;

        if (task && date) {
            // Add task to list
            addTaskToList(task, date);
            // Save task in localStorage
            saveTask(task, date);

            // Clear input fields
            taskInput.value = '';
            dateInput.value = '';
        }
    });
    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'SPAN') {
            const taskItem = e.target.parentElement;
            // Remove task from localStorage and the DOM
            removeTaskFromLocalStorage(taskItem.textContent.slice(0, -2));
            taskItem.remove();
        }
    });

    
    // Function to add a task to the DOM
    function addTaskToList(task, date) {
        const listItem = document.createElement('li');
        listItem.textContent = `${task} - Due by ${date}`;
        
        const span = document.createElement('span');
        span.innerHTML = "\u00D7";  // '×' delete button
        listItem.appendChild(span);

        // taskList.appendChild(listItem);
        // Insert the new task at the top of the list
    const taskList = document.getElementById('task-list');
    taskList.insertBefore(listItem, taskList.firstChild);
    }
});